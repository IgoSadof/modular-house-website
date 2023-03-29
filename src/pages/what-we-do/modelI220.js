import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'model I, модульный дом' : 'model I, модульный дом'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelI220/" />
      </Helmet>

      <Layout 
        pageTitle={lang === 'EN' 
        ? 'Модульный дом "Model I" от компании BY home, Беларусь' 
        : 'Модульный дом "Model I" от компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? "Model I - это идеальный выбор для тех, кто ищет комфортный и просторный модульный дом. Наша команда разработала проект, который сочетает в себе уют и функциональность. Мы использовали только экологически чистые материалы и новейшие технологии, чтобы создать дом, который будет отвечать всем требованиям современного человека."
        : "Model I - это идеальный выбор для тех, кто ищет комфортный и просторный модульный дом. Наша команда разработала проект, который сочетает в себе уют и функциональность. Мы использовали только экологически чистые материалы и новейшие технологии, чтобы создать дом, который будет отвечать всем требованиям современного человека."}  
        page="house" 
        component = {HousePage} 
        house='i220' />
    </>
  );
};
export default HousesPage;

