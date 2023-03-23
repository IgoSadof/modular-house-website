import "../components/css/global.css";
import React from "react";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const AboutUsPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="о нас, by home" />
        <meta property="og:url" content="https://modular-house.by/who-we-are" />
      </Helmet>

      <Layout
        pageTitle={lang === 'EN' ? 'Who we are' : 'О нас'}
        page='aboutUs'
        component = {AboutUs} />
    </>
  );
}

export default AboutUsPage;