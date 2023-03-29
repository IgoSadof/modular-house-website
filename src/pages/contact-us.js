import "../components/css/global.css";
import React from "react";
import ContactsPage from "../components/ContactsPage";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Contacts = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'контакты by home' : 'контакты by home'} />
        <meta property="og:url" content="https://modular-house.by/contact-us" />
      </Helmet>

      <Layout
        pageTitle={lang === 'EN' 
        ? 'Контакты - BY home | Создание модульных домов в Беларуси' 
        : 'Контакты - BY home | Создание модульных домов в Беларуси'}
        pageDescription={lang === "EN"
        ? "Контакты компании BY home в Минске: Офис студии ZROBIM architects, тел. +375 (44) 710-67-35. BY home в Вологде: +7 (921) 252-81-08"
        : "Контакты компании BY home в Минске: Офис студии ZROBIM architects, тел. +375 (44) 710-67-35. BY home в Вологде: +7 (921) 252-81-08"}
        page='contacts'
        component = {ContactsPage} />
    </>
  );
}

export default Contacts;
