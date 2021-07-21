import "../../components/global.css";
import React from "react";
import HousesList from "../../components/HousesList";
import Layout from "../../components/Layout";


const HousesListPage = () => {
  return (
    <Layout pageTitle="House List" page="houseList">
      <HousesList />
    </Layout>
  );
};
export default HousesListPage;