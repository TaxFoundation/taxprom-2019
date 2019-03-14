import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Layout from './layout';

const API =
  'https://x94h0tg3id.execute-api.us-east-1.amazonaws.com/production/taxprom';

const StyledForm = styled.div`
  align-content: stretch;
  align-items: center;
  background-color: ${props =>
    props.success ? props.theme.blue : props.theme.black};
  bottom: 0;
  color: ${props => props.theme.white};
  display: grid;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  padding: 70px 1rem 1rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color 0.4s ease-in-out;

  @media (min-width: 500px) {
    padding: 70px 3rem 3rem 3rem;

    .tp-contact,
    .tp-name {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }

    .tp-address3 {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 2fr 1fr 1fr;
    }
  }

  form {
    transform: scaleY(${props => (props.success ? '0' : '1')});
    transition: transform 0.1s ease-in-out;
  }

  label {
    color: ${props => props.theme.white};
    display: block;
    margin-top: 1rem;
    padding-bottom: 0.4rem;
  }

  input,
  select,
  textarea {
    background-color: ${props => props.theme.blue};
    border: 0;
    color: ${props => props.theme.white};
    font-size: 1rem;
    padding: 0.5rem;
    transition: background-color 0.1s ease-in-out;
    width: 100%;

    &:active,
    &:focus,
    &:hover {
      background-color: ${props => props.theme.blueLight};
    }
  }

  button {
    background-color: ${props => props.theme.blue};
    border: 0;
    color: ${props => props.theme.white};
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem 0;
    padding: 0.5rem;
    transition: background-color 0.1s ease-in-out;
    text-align: center;
    width: 100%;

    &:active,
    &:focus,
    &:hover {
      background-color: ${props => props.theme.blueLight};
    }
  }
`;

const Heading = styled.h1`
  border-bottom: 1px solid ${props => props.theme.blue};
  color: ${props => props.theme.blue};
  font-family: ${props => props.theme.fontFamilies.baskerville};
  font-size: 3rem;
  font-style: italic;
  padding-bottom: 1rem;
  text-transform: none;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.white};
  display: block;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  transition: color 0.1s ease-in-out;
  text-align: center;
  text-decoration: none;

  &:active,
  &:focus,
  &:visited {
    color: ${props => props.theme.white};
    text-decoration: none;
  }

  &:hover {
    color: ${props => props.theme.blueLight};
  }
`;

const TextInput = ({ item, label, type, required, update }) => (
  <div className={`tp-${item}`}>
    <label htmlFor={item}>{label}</label>
    <input
      name={item}
      id={item}
      onChange={e => update(e)}
      type={type || 'text'}
      required={required || false}
    />
  </div>
);

TextInput.propTypes = {
  item: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  update: PropTypes.func,
};

const Result = styled.div`
  color: ${props => props.theme.white};
  display: grid;
  height: 100vh;
  place-content: center;
  transform: scaleY(${props => (props.success ? '1' : '0')});
  transition: transform 0.1s ease-in-out;
`;

const ReceptionPledge = ({ data }) => {
  const { name, price } = data.receptionsYaml;
  const [form, setForm] = useState({
    level: name,
    price,
    email: '',
    fName: '',
    lName: '',
    org: '',
    title: '',
    phone: '',
    comments: '',
  });
  const [buttonText, setButtonText] = useState('Submit');
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (submit) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const request = new Request(API, {
        headers,
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(form),
      });

      fetch(request)
        .then(response => {
          if (response.status === 200) {
            setSuccess(true);
            setButtonText('Success!');
          } else {
            setError(true);
            setButtonText(`Sorry, something didn't work.`);
            throw new Error('Form submission did not work');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [submit]);

  const submitForm = e => {
    e.preventDefault();
    setSubmit(true);
  };

  const updateData = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <StyledForm success={success}>
        <form onSubmit={e => submitForm(e)} required>
          <Heading>{`I Want to Sponsor the ${name}`}</Heading>
          <div className="tp-name">
            <TextInput
              item="fName"
              label="First Name"
              update={updateData}
              required
            />
            <TextInput
              item="lName"
              label="Last Name"
              update={updateData}
              required
            />
          </div>
          <div className="tp-name">
            <TextInput item="org" label="Organization" update={updateData} />
            <TextInput item="title" label="Title" update={updateData} />
          </div>
          <div className="tp-contact">
            <TextInput
              item="email"
              label="Email Address"
              update={updateData}
              required
              type="email"
            />
            <TextInput
              item="phone"
              label="Phone Number"
              update={updateData}
              required
              type="tel"
            />
          </div>
          <div className="tp-comments">
            <label htmlFor="comments">Questions or Comments</label>
            <textarea name="comments" id="comments" onChange={updateData} />
          </div>
          <button type="submit">{buttonText}</button>
          <StyledLink to="/">← Back to Main Page</StyledLink>
        </form>
      </StyledForm>
      <Result success={success} error={error}>
        {success ? (
          <div>
            <h1>Thank You!</h1>
            <p>Your pledge has been received. You will hear from us shortly!</p>
            <StyledLink to="/">← Back to Main Page</StyledLink>
          </div>
        ) : null}
        {error ? (
          <div>
            <h1>Uh Oh</h1>
            <p>
              Sorry, but something has gone wrong. Please contact Josh Jaye at{' '}
              <a href="mailto:jjj@taxfoundation.org">jjj@taxfoundation.org</a>{' '}
              to make your pledge.
            </p>
          </div>
        ) : null}
      </Result>
    </Layout>
  );
};

ReceptionPledge.propTypes = {
  data: PropTypes.object,
};

export default ReceptionPledge;

export const query = graphql`
  query($name: String!) {
    receptionsYaml(name: { eq: $name }) {
      name
      price
    }
  }
`;
