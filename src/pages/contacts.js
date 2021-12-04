import "../components/global.css";
import React from "react";
import ContactsPage from "../components/ContactsPage";
import Layout from "../components/Layout";

export default function Contacts() {
  return (
    <Layout pageTitle="ContactsBlock" page='contacts' component = {ContactsPage}>
    </Layout>
  );
}
