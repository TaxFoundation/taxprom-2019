import React from 'react';

import taxprom from '../../data/taxprom.json';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Splash from '../sections/Splash';
import Details from '../sections/Details';
import Tables from '../sections/Tables';

const IndexPage = () => (
  <Layout>
    <SEO title="Join us!" keywords={[`gatsby`, `application`, `react`]} />
    <Splash
      date={taxprom.date}
      venueName={taxprom.venueName}
      showVideo={taxprom.video.showVideo}
    />
    <Details details={taxprom.details} id="details" />
    {/* Awardees */}
    <Tables />
  </Layout>
);

export default IndexPage;
