import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model A192" page="house">
      <HousePage house={0}></HousePage>
    </Layout>
  );
};
export default HousesPage;