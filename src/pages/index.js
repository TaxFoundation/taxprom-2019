import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Splash from '../sections/Splash';

const IndexPage = () => (
  <Layout>
    <SEO title="Join us!" keywords={[`gatsby`, `application`, `react`]} />
    <Splash />
  </Layout>
);

export default IndexPage;
