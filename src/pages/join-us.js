import React from 'react';

import taxprom from '../../data/taxprom.json';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Splash from '../sections/Splash';
import Details from '../sections/Details';
import Receptions from '../sections/Receptions';
import Tables from '../sections/Tables';
import Tickets from '../sections/Tickets';
import PhotoGrid2 from '../sections/PhotoGrid2';
import PreviousSponsors from '../sections/PreviousSponsors';
import EventMap from '../sections/EventMap';
import Footer from '../sections/Footer';

const JoinUs = () => (
  <Layout>
    <SEO title="Join us!" keywords={[`gatsby`, `application`, `react`]} />
    <Splash
      date={taxprom.date}
      time={taxprom.time}
      venueName={taxprom.venueName}
      showVideo={taxprom.video.showVideo}
    />
    <Details details={taxprom.details} id="details" />
    {/* Awardees */}
    <Receptions />
    <Tables />
    <Tickets />
    <PhotoGrid2 />
    <PreviousSponsors />
    <EventMap
      date={taxprom.date}
      time={taxprom.time}
      id="map"
      venue={taxprom.venueName}
      address={taxprom.address}
      url={taxprom.map}
    />
    <Footer />
  </Layout>
);

export default JoinUs;
