import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Modern house" page="house">
      <HousePage house={2}></HousePage>
    </Layout>
  );
};
export default HousesPage;

