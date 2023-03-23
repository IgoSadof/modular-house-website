import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="model A, модульный дом" />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelA192/" />
      </Helmet>

      <Layout pageTitle="Model A" page="house" component = {HousePage} house='a192' />
    </>
  );
};
export default HousesPage;