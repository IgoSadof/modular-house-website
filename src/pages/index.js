import "../components/css/global.css";
import React from "react";
import Main from "../components/Main";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const MainPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="модульный дом, by home" />
        <meta property="og:url" content="https://modular-house.by" />
      </Helmet>

      <Layout
        pageTitle={lang === 'EN' ? 'About Us' : 'О Нас'}
        page='main'
        component={Main} />
    </>
  );
}

export default MainPage;
