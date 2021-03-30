import React from 'react';
import TodayWeather from '../../containers/TodayWeather/TodayWeather';
import WeekWeather from '../../containers/WeekWeather/WeekWeather';
import StyledDetailsDaily from './DetailsDaily.styles';

const DetailsDaily: React.FC = () => {
  return (
    <StyledDetailsDaily>
      <TodayWeather />
      <WeekWeather />
    </StyledDetailsDaily>
  );
};

export default DetailsDaily;
