import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="model S, smuga, модульный дом" />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelS121/" />
      </Helmet>

      <Layout pageTitle="Model S" page="house" component = {HousePage} house='s121' />
    </>
  );
};
export default HousesPage;