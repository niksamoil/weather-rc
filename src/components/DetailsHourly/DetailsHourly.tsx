import React from 'react';
import HourWeather from '../../containers/HourWeather/HourWeather';
import TodayWeather from '../../containers/TodayWeather/TodayWeather';
import StyledDetailsHourly from './DetailsHourly.styles';

const DetailsHourly: React.FC = () => {
  return (
    <StyledDetailsHourly>
      <TodayWeather />
      <HourWeather />
    </StyledDetailsHourly>
  );
};

export default DetailsHourly;
