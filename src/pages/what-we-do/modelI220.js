import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="model I, модульный дом" />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelI220/" />
      </Helmet>

      <Layout pageTitle="Model I" page="house" component = {HousePage} house='i220' />
    </>
  );
};
export default HousesPage;

