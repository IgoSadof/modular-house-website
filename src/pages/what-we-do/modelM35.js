import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'camp c, модульный дом' : 'camp c, модульный дом'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelM35/" />
      </Helmet>

      <Layout 
        pageTitle={lang === 'EN' 
        ? 'Модульный дом "Camp C" от компании BY home, Беларусь' 
        : 'Модульный дом "Camp C" от компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? `Camp C - это идеальный выбор для тех, кто ищет компактный и уютный модульный дом. 
        Мы использовали только экологически чистые материалы и новейшие технологии, чтобы создать дом, 
        который будет соответствовать всем требованиям современного человека. Модель "Camp C" обладает уникальной планировкой, 
        которая максимально использует площадь дома и обеспечивает комфортное проживание.`
        : `Camp C - это идеальный выбор для тех, кто ищет компактный и уютный модульный дом. 
        Мы использовали только экологически чистые материалы и новейшие технологии, чтобы создать дом, 
        который будет соответствовать всем требованиям современного человека. Модель "Camp C" обладает уникальной планировкой, 
        которая максимально использует площадь дома и обеспечивает комфортное проживание.`}  
        page="house" 
        component = {HousePage} 
        house='m35' />
    </>
  );
};
export default HousesPage;