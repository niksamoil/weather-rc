import React from 'react';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledHour from './HourWeather.styles';

const HourWeather: React.FC = () => {
  return (
    <StyledHour>
      <li>
        <div className="day-in-week">
          <div className="hour-value">11AM</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="hour-value">11AM</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="hour-value">11AM</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="hour-value">11AM</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="hour-value">11AM</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
      <li>
        <div className="day-in-week">
          <div className="hour-value">11AM</div>
          <div className="weather-icon">
            <FontAwesomeIcon icon={faCloudSun} />
          </div>
          <div className="temperature">25&deg;</div>
        </div>
      </li>
    </StyledHour>
  );
};

export default HourWeather;
