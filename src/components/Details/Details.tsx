import React from 'react';
import TodayWeather from '../../containers/TodayWeather/TodayWeather';
import WeekWeather from '../../containers/WeekWeather/WeekWeather';
import StyledDetails from './Details.styles';

const Details: React.FC = () => {
  return (
    <StyledDetails>
      <TodayWeather />
      <WeekWeather />
    </StyledDetails>
  );
};

export default Details;
