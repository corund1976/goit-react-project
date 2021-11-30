import React from 'react';
import { Redirect } from 'react-router-dom';

import { routes } from 'routes';

const HomePage = () => {
  return (
    <Redirect to={routes.expense} />
  );
};

export default HomePage;
