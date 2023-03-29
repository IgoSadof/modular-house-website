import "../components/css/global.css";
import React from "react";
import Main from "../components/Main";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const MainPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'модульный дом, by home' :'модульный дом, by home'} />
        <meta property="og:url" content="https://modular-house.by" />
      </Helmet>

      <Layout
        pageTitle={lang === 'EN' 
        ? 'Производство модульных домов в Беларуси. Купить модульный дом | BY home' 
        : 'Производство модульных домов в Беларуси. Купить модульный дом | BY home'}
        pageDescription={lang === "EN"
        ? "BY home - Cоздаем быстровозводимые модульные дома высокого качества. На нашем сайте вы можете купить готовый модульный дом или заказать индивидуальный проект."
        : "BY home - Cоздаем быстровозводимые модульные дома высокого качества. На нашем сайте вы можете купить готовый модульный дом или заказать индивидуальный проект."}
        page='main'
        component={Main} />
    </>
  );
}

export default MainPage;
