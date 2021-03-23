import React from 'react';
import MyLocation from '../MyLocation/MyLocation';
import SearchCItyInput from '../SearchCityInput/SearchCItyInput';
import { StyledDiv, StyledMainWeather } from './MainWeather.styles';

const MainWeather: React.FC = () => {
  return (
    <StyledMainWeather>
      <StyledDiv>
        <SearchCItyInput />
        <MyLocation />
      </StyledDiv>
    </StyledMainWeather>
  );
};

export default MainWeather;
