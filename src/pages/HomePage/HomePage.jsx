import React from 'react';
import { Redirect } from 'react-router-dom';

import { Routes } from 'routes/Routes';

const HomePage = () => {
  return (
    <Redirect to={Routes.expense} />
  );
};

export default HomePage;
