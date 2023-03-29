import React from "react";
import Watch from "../components/Watch";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const WatchPage = ({lang}) => {
  return (
    <>
      <Helmet>
        <meta property="keywords" content={lang === 'EN' ? 'аренда дома, nomad houses, глэмпинг' :'аренда дома, nomad houses, глэмпинг'} />
        <meta property="og:url" content="https://modular-house.by/nomadhouses" />
      </Helmet>

      <Layout
        pageTitle={lang === 'EN' 
        ? 'Снять дом на Браславских озерах | Аренда дома на сутки в Nomad Houses' 
        : 'Снять дом на Браславских озерах | Аренда дома на сутки в Nomad Houses'}
        pageDescription={lang === "EN"
        ? "Аренда дома в глэмпинге на Браславских озерах - это прекрасная возможность провести незабываемый отдых в окружении красивой природы. Nomad Houses - Современный отдых от городской суеты"
        : "Аренда дома в глэмпинге на Браславских озерах - это прекрасная возможность провести незабываемый отдых в окружении красивой природы. Nomad Houses - Современный отдых от городской суеты"}
        page="nomadhouses"
        component = {Watch}>
      </Layout>
    </>
  );
};

export default WatchPage;