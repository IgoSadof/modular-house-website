import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="model B, модульный дом" />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelB120/" />
      </Helmet>

      <Layout pageTitle="Model B" page="house" component = {HousePage} house='b120' />
    </>
  );
};
export default HousesPage;

