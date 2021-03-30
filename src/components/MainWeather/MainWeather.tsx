import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LatestLocation from '../LatestLocation/LatestLocation';
import MyLocation from '../MyLocation/MyLocation';
import SearchCItyInput from '../SearchCityInput/SearchCItyInput';
import {
  StyledDiv,
  StyledMainWeather,
  StyledLatestLocation,
  StyledDayAndHour,
} from './MainWeather.styles';

const MainWeather: React.FC = () => {
  return (
    <StyledMainWeather>
      <StyledDiv>
        <SearchCItyInput />
        <MyLocation />
      </StyledDiv>
      <StyledLatestLocation>
        <LatestLocation />
      </StyledLatestLocation>
      <StyledDayAndHour>
        <Link to="/daily">
          <div className="daily">
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Daily</span>
          </div>
        </Link>
        <Link to="/hourly">
          <div className="hourly">
            <FontAwesomeIcon icon={faClock} />
            <span>Hourly</span>
          </div>
        </Link>
      </StyledDayAndHour>
    </StyledMainWeather>
  );
};

export default MainWeather;
