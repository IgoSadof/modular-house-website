import "../../components/css/global.css";
import React from "react";
import HousesList from "../../components/HousesList";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";

const HousesListPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="проект модульного дома" />
        <meta property="og:url" content="https://modular-house.by/what-we-do" />
      </Helmet>

      <Layout
        pageTitle={lang === 'EN' ? 'What we do' : 'Что мы делаем'}
        page="houseList"
        component = {HousesList} />
    </>
  );
};

export default HousesListPage;
