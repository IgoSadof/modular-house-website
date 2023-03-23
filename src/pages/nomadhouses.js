import React from "react";
import Watch from "../components/Watch";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const WatchPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content="аренда дома, nomad houses, глэмпинг" />
        <meta property="og:url" content="https://modular-house.by/nomadhouses" />
      </Helmet>

      <Layout
        pageTitle={lang === "EN" ? "Where to see" : "Где увидеть"}
        pageDescription={lang === "EN"
          ? "Book a house to rent and live"
          : "Бронируй дом чтобы жить в нём"}
        page="nomadhouses"
        component = {Watch}>
      </Layout>
    </>
  );
};

export default WatchPage;