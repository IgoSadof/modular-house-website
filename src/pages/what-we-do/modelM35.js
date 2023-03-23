import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="camp c, модульный дом" />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelM35/" />
      </Helmet>

      <Layout pageTitle="Model 35" page="house" component = {HousePage} house='m35' />
    </>
  );
};
export default HousesPage;