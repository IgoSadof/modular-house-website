import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Fifth house" page="house">
      <HousePage house={4}></HousePage>;
    </Layout>
  );
};
export default HousesPage;