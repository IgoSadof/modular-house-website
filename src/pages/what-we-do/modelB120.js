import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'model B, модульный дом' : 'model B, модульный дом'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelB120/" />
      </Helmet>

      <Layout 
        pageTitle={lang === 'EN' 
        ? 'Модульный дом "Model B" от компании BY home, Беларусь' 
        : 'Модульный дом "Model B" от компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? "Model B - это одна из наших лучших разработок в сфере модульного строительства. Данный модульный дом отличается высоким уровнем комфорта и уютной обстановкой. Используя только экологически чистые материалы, мы создали дом, который не только привлекателен внешне, но и функционален внутри."
        : "Model B - это одна из наших лучших разработок в сфере модульного строительства. Данный модульный дом отличается высоким уровнем комфорта и уютной обстановкой. Используя только экологически чистые материалы, мы создали дом, который не только привлекателен внешне, но и функционален внутри."}
        page="house" 
        component = {HousePage} 
        house='b120' />
    </>
  );
};
export default HousesPage;

