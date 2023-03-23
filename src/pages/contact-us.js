import "../components/css/global.css";
import React from "react";
import ContactsPage from "../components/ContactsPage";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Contacts = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="контакты by home" />
        <meta property="og:url" content="https://modular-house.by/contact-us" />
      </Helmet>

      <Layout
        pageTitle={lang === "EN" ? "Contact us" : "Свяжитесь с нами"}
        page='contacts'
        component = {ContactsPage} />
    </>
  );
}

export default Contacts;
