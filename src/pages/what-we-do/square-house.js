import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Square house" page="house">
      <HousePage house={0}></HousePage>
    </Layout>
  );
};
export default HousesPage;