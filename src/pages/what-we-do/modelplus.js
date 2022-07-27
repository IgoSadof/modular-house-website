import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model +" page="house" component = {HousePage} house='modelplus'>
    </Layout>
  );
};
export default HousesPage;