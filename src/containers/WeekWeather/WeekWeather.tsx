import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import StyledWeek from './WeekWeather.styles';

const WeekWeather: React.FC = () => {
  return (
    <StyledWeek>
      <li>
        <div className="day-in-week">
          <div className="day-name">TUE</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="day-name">TUE</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="day-name">TUE</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="day-name">TUE</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="day-name">TUE</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="day-name">TUE</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
    </StyledWeek>
  );
};

export default WeekWeather;
