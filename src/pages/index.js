import React from "react";
import Layout from "../components/layout/layout";
import Hero from "../components/global/Hero";
import Servizi from "../components/global/Servizi";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Servizi />
    </Layout>
  );
};

export default IndexPage;
