import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'model S, smuga, модульный дом' : 'model S, smuga, модульный дом'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelS121/" />
      </Helmet>

      <Layout 
        pageTitle={lang === 'EN' 
        ? 'Модульный дом "Model S" - Smuga от компании BY home, Беларусь' 
        : 'Модульный дом "Model S" - Smuga от компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? `Model S - это превосходный выбор для тех, кто ищет современный и стильный модульный дом.
        Мы использовали только экологически чистые материалы и новейшие технологии, чтобы создать дом,
        который будет отвечать всем требованиям современного человека. Уютный и комфортный интерьер,
        а также красивый и функциональный экстерьер - все это вы найдете в модели SMUGA`
        : `Model S - это превосходный выбор для тех, кто ищет современный и стильный модульный дом.
        Мы использовали только экологически чистые материалы и новейшие технологии, чтобы создать дом,
        который будет отвечать всем требованиям современного человека. Уютный и комфортный интерьер,
        а также красивый и функциональный экстерьер - все это вы найдете в модели SMUGA`}
        page="house" 
        component = {HousePage} 
        house='s121' />
    </>
  );
};
export default HousesPage;