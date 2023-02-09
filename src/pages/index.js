import "../components/css/global.css";
import React from "react";
import Main from "../components/Main";
import Layout from "../components/Layout";

const MainPage = ({lang}) => {
  return (
    <Layout
      pageTitle={lang === 'EN' ? 'About Us' : 'О Нас'}
      pageDescription={lang === 'EN' ? 'Blah blah' : 'Бла бла бла'}
      page='main'
      component={Main} />
  );
}

export default MainPage;
