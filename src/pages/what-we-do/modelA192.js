import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model A" page="house" component = {HousePage} house='a192'>
    </Layout>
  );
};
export default HousesPage;