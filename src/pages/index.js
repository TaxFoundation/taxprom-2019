import React from 'react';

import taxprom from '../../data/taxprom.json';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Splash from '../sections/Splash';
import Details from '../sections/Details';
import Awardees from '../sections/Awardees';
// import Receptions from '../sections/Receptions';
import Tables from '../sections/Tables';
import Tickets from '../sections/Tickets';
import PhotoGrid2 from '../sections/PhotoGrid2';
import Sponsors from '../sections/Sponsors';
import PreviousWinners from '../sections/PreviousWinners';
import EventMap from '../sections/EventMap';
import Footer from '../sections/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Join us!" keywords={[`gatsby`, `application`, `react`]} />
    <Splash
      date={taxprom.date}
      time={taxprom.time}
      venueName={taxprom.venueName}
      showVideo={taxprom.video.showVideo}
    />
    <Details details={taxprom.details} id="details" />
    <Awardees />
    <PreviousWinners />
    {/* <Receptions /> */}
    <Tables />
    <Tickets />
    <PhotoGrid2 />
    <Sponsors />
    <EventMap
      date={taxprom.date}
      time={taxprom.time}
      id="map"
      venue={taxprom.venueName}
      streetAddress={taxprom.streetAddress}
      city={taxprom.city}
      state={taxprom.state}
      zip={taxprom.zip}
      url={taxprom.map}
    />
    <Footer />
  </Layout>
);

export default IndexPage;
