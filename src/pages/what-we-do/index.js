import "../../components/css/global.css";
import React from "react";
import HousesList from "../../components/HousesList";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";

const HousesListPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'проект модульного дома' :'проект модульного дома'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do" />
      </Helmet>

      <Layout
        pageTitle={lang === 'EN' 
        ? 'Готовые проекты быстровозводимых модульных домов | BY home' 
        : 'Готовые проекты быстровозводимых модульных домов | BY home'}
        pageDescription={lang === "EN"
        ? "На нашем сайте вы можете ознакомиться с готовыми проектами модульных домов, выполненными командой профессионалов компании BY home"
        : "На нашем сайте вы можете ознакомиться с готовыми проектами модульных домов, выполненными командой профессионалов компании BY home"}
        page="houseList"
        component = {HousesList} />
    </>
  );
};

export default HousesListPage;
