import React, { useEffect } from 'react';
import getWeather from '../../api/authApi';
import TodayWeather from '../../containers/TodayWeather/TodayWeather';
import WeekWeather from '../../containers/WeekWeather/WeekWeather';
import StyledDetailsDaily from './DetailsDaily.styles';

const DetailsDaily: React.FC = () => {
  useEffect(() => {
    // getWeather();
  }, []);
  return (
    <StyledDetailsDaily>
      <TodayWeather />
      <WeekWeather />
    </StyledDetailsDaily>
  );
};

export default DetailsDaily;
