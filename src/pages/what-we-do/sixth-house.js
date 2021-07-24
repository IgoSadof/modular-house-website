import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Sixth house" page="house">
      <HousePage house={5}></HousePage>
    </Layout>
  );
};
export default HousesPage;
