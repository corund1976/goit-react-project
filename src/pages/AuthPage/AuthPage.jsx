import React from "react";

import Section from "components/Section";
import PageTitle from "components/PageTitle";
import AuthForm from "components/AuthForm";

import s from "./AuthPage.module.css";

function AuthPage() {
  return (
    <Section>
      <div className={s.authPage}>
        <PageTitle />
        <AuthForm />
      </div>
    </Section>
  );
}

export default AuthPage;
