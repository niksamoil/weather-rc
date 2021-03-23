import React from 'react';
import MainWeather from '../MainWeather/MainWeather';
import StyledConstainer from './App.styles';

const App: React.FC = () => {
  return (
    <>
      <StyledConstainer>
        <MainWeather />
      </StyledConstainer>
    </>
  );
};

export default App;
