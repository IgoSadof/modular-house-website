import React, { useEffect } from "react";
import Watch from "../components/Watch";
import Layout from "../components/Layout";

const WatchPage = () => {
  useEffect(() => {
    window.location.replace('/nomadhouses');
  }, []);

  return (
    <Layout pageTitle="Where to see" page="watch" component = {Watch}>
    </Layout>
  );
};
export default WatchPage;