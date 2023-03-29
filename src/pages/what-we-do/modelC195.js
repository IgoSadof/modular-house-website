import React from "react";
import HousePage from "../../components/HousePage";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";


const HousesPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'model C, модульный дом' : 'model C, модульный дом'} />
        <meta property="og:url" content="https://modular-house.by/what-we-do/modelC195/" />
      </Helmet>

      <Layout 
        pageTitle={lang === 'EN' 
        ? 'Модульный дом "Model C" от компании BY home, Беларусь' 
        : 'Модульный дом "Model C" от компании BY home, Беларусь'}
        pageDescription={lang === "EN"
        ? "Model C - это новый проект, созданный нашей командой в сфере модульного строительства. Мы сделали упор на эргономику и функциональность, чтобы создать дом, который будет не только уютным, но и удобным для жизни. Используя только экологически чистые материалы, мы создали дом, который будет отвечать всем требованиям современного человека."
        : "Model C - это новый проект, созданный нашей командой в сфере модульного строительства. Мы сделали упор на эргономику и функциональность, чтобы создать дом, который будет не только уютным, но и удобным для жизни. Используя только экологически чистые материалы, мы создали дом, который будет отвечать всем требованиям современного человека."}
        page="house" 
        component = {HousePage} 
        house='c195' />
    </>
  );
};
export default HousesPage;

