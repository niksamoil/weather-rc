import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsDaily from '../DetailsDaily/DetailsDaily';
import DetailsHourly from '../DetailsHourly/DetailsHourly';
import MainWeather from '../MainWeather/MainWeather';
import StyledConstainer from './App.styles';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <StyledConstainer>
          <MainWeather />
          <Switch>
            <Route path="/" exact component={DetailsDaily} />
            <Route path="/daily" component={DetailsDaily} />
            <Route path="/hourly" component={DetailsHourly} />
          </Switch>
        </StyledConstainer>
      </Router>
    </>
  );
};

export default App;
