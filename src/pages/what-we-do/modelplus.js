import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = () => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'camp b, модульный дом' : 'camp b, модульный дом'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelplus/" />
      </Helmet>

      <Layout 
        pageTitle={lang === 'EN' 
        ? 'Модульный дом "Camp B" от компании BY home, Беларусь' 
        : 'Модульный дом "Camp B" от компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? `Модель Camp B - это новый и уникальный проект нашей компании,
        который сочетает в себе функциональность, комфорт и экономичность.
        Мы использовали только высококачественные и экологически чистые материалы,
        чтобы создать дом, который будет уютным и комфортным для жизни.`
        : `Модель Camp B - это новый и уникальный проект нашей компании,
        который сочетает в себе функциональность, комфорт и экономичность.
        Мы использовали только высококачественные и экологически чистые материалы,
        чтобы создать дом, который будет уютным и комфортным для жизни.`}  
        page="house" 
        component = {HousePage} 
        house='modelplus' />
    </>
  );
};
export default HousesPage;