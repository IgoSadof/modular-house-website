import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model B" page="house" component = {HousePage} house='b120'>
    </Layout>
  );
};
export default HousesPage;

