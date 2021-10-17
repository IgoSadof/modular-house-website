import "../components/global.css";
import React from "react";
import Contacrs from "../components/Contacts";
import Layout from "../components/Layout";

export default function Contacts() {
  return (
    <Layout pageTitle="Contacts" component = {Contacrs}>
    </Layout>
  );
}
