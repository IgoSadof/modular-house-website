import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model 35" page="house" component = {HousePage} house='m35'>
    </Layout>
  );
};
export default HousesPage;