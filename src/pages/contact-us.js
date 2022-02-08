import "../components/css/global.css";
import React from "react";
import ContactsPage from "../components/ContactsPage";
import Layout from "../components/Layout";

export default function Contacts() {
  return (
    <Layout pageTitle="Contacts us" page='contacts' component = {ContactsPage}>
    </Layout>
  );
}
