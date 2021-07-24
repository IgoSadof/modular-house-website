import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Fourth house" page="house">
      <HousePage house={3}></HousePage>
    </Layout>
  );
};
export default HousesPage;

