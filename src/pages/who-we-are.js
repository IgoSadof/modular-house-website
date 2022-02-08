import "../components/css/global.css";
import React from "react";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";

export default function AboutUsPage() {
  return (
    <Layout pageTitle="What we do" page='aboutUs' component = {AboutUs}>
    </Layout>
  );
}
