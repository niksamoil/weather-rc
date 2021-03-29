import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import StyledTodayWeather from './TodayWeather.styles';

const TodayWeather: React.FC = () => {
  return (
    <StyledTodayWeather>
      <div className="first-block">
        <div className="temperature">
          21<sup>&deg;</sup>
        </div>
        <div className="day">
          Monday 27<sup>th</sup>
        </div>
      </div>
      <div className="second-block">
        <div className="weather-image">
          <FontAwesomeIcon icon={faCloudMoonRain} />
        </div>
        <div className="wind-speed">
          4mph / 16<sup>&deg;</sup>
        </div>
      </div>
    </StyledTodayWeather>
  );
};

export default TodayWeather;
