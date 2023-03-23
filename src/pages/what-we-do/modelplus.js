import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="camp b, модульный дом" />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelplus/" />
      </Helmet>

      <Layout pageTitle="Model +" page="house" component = {HousePage} house='modelplus' />
    </>
  );
};
export default HousesPage;