import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model I" page="house" component = {HousePage} house='i220'>
    </Layout>
  );
};
export default HousesPage;

