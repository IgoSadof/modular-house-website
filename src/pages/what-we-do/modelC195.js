import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="model C, модульный дом" />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelC195/" />
      </Helmet>

      <Layout pageTitle="Model C" page="house" component = {HousePage} house='c195' />
    </>
  );
};
export default HousesPage;

