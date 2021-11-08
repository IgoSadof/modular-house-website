import "../components/global.css";
import React from "react";
import Contacts from "../components/Contacts";
import Layout from "../components/Layout";

export default function ContactsPage() {
  return (
    <Layout pageTitle="Contacts" component = {Contacts}>
    </Layout>
  );
}
