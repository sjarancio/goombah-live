import React from 'react';
import './App.css';
import Terms from './components/TermsSection/Terms';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
// import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/terms' component={Terms} exact />
      </Switch>
    </Router>
  );
}

export default App;
