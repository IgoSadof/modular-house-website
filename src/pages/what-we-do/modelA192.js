import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'model A, модульный дом' : 'model A, модульный дом'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelA192/" />
      </Helmet>

      <Layout         
        pageTitle={lang === 'EN' 
        ? 'Модульный дом "Model A" от компании BY home, Беларусь' 
        : 'Модульный дом "Model A" от компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? `Model A - это прекрасный выбор для тех, кто ищет просторный 
        и удобный модульный дом. Наша команда разработала уникальный проект, 
        который сочетает в себе высокий уровень комфорта и функциональности. 
        Используя только экологически чистые материалы, мы создали дом, 
        который будет уютным и комфортным для жизни.`
        : `Model A - это прекрасный выбор для тех, кто ищет просторный 
        и удобный модульный дом. Наша команда разработала уникальный проект, 
        который сочетает в себе высокий уровень комфорта и функциональности. 
        Используя только экологически чистые материалы, мы создали дом, 
        который будет уютным и комфортным для жизни.`}
        page="house" 
        component = {HousePage} 
        house='a192' />
    </>
  );
};
export default HousesPage;