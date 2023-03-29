import "../components/css/global.css";
import React from "react";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const AboutUsPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'о нас, by home' : 'о нас, by home'} />
        <meta property="og:url" content="https://modular-house.by/who-we-are" />
      </Helmet>

      <Layout
        pageTitle={lang === 'EN' 
        ? 'О нас | Команда архитекторов компании BY home, Беларусь' 
        : 'О нас | Команда архитекторов компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? `Команда архитекторов, стремящаяся сделать жилье доступным и качественным.
        BY home - быстровозводимые модульные дома высокого качества.`
        : `Команда архитекторов, стремящаяся сделать жилье доступным и качественным. 
        BY home - быстровозводимые модульные дома высокого качества.`}
        page='aboutUs'
        component = {AboutUs} />
    </>
  );
}

export default AboutUsPage;