import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";


const HousesPage = () => {
  return (
    <Layout pageTitle="Model S121" page="house" component = {HousePage} house='s121'>
    </Layout>
  );
};
export default HousesPage;