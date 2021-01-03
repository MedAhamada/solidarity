import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@material-ui/core';
import Header from '../Header';
import { GlobalStyle } from '../../../styles/global-styles';

const Root: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Container maxWidth="xl">
        <Header />
        <div>{children}</div>
      </Container>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default Root;
