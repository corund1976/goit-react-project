import React from 'react';

import Container from 'components/Container';
import PageTitle from 'components/PageTitle';
import AuthForm from 'components/AuthForm';

import s from './AuthPage.module.css';

function AuthPage() {
  return (
    <Container>
      <PageTitle />
      <AuthForm />
    </Container>
  )    
};

export default AuthPage;