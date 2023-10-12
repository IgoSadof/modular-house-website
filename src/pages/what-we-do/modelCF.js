import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'camp c flat, модульный дом' : 'camp c flat, модульный дом'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelCF/" />
      </Helmet>

      <Layout 
        pageTitle={lang === 'EN' 
        ? 'Модульный дом "Camp C flat" от компании BY home, Беларусь' 
        : 'Модульный дом "Camp C flat" от компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? 'Camp C flat - это идеальный выбор для тех, кто ищет компактный и уютный модульный дом. Мы использовали только экологически чистые материалы и новейшие технологии, чтобы создать дом, который будет соответствовать всем требованиям современного человека. Модель "Camp C" обладает уникальной планировкой, которая максимально использует площадь дома и обеспечивает комфортное проживание.'
        : 'Camp C flat - это идеальный выбор для тех, кто ищет компактный и уютный модульный дом. Мы использовали только экологически чистые материалы и новейшие технологии, чтобы создать дом, который будет соответствовать всем требованиям современного человека. Модель "Camp C" обладает уникальной планировкой, которая максимально использует площадь дома и обеспечивает комфортное проживание.'}  
        page="house" 
        component = {HousePage} 
        house='cflat' />
    </>
  );
};
export default HousesPage;