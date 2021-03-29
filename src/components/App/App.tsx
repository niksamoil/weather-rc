import React from 'react';
import Details from '../Details/Details';
import MainWeather from '../MainWeather/MainWeather';
import StyledConstainer from './App.styles';

const App: React.FC = () => {
  return (
    <>
      <StyledConstainer>
        <MainWeather />
        <Details />
      </StyledConstainer>
    </>
  );
};

export default App;
