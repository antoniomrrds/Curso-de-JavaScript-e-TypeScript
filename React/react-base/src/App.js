import React from 'react';
import Routes from './routes';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router history={history}>
      <Header />;
      <Routes />;
      <GlobalStyles />
    </Router>
  );
}

export default App;
