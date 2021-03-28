import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
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
        <div className="daily">
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Dayly</span>
        </div>
        <div className="hourly">
          <FontAwesomeIcon icon={faClock} />
          <span>Hourly</span>
        </div>
      </StyledDayAndHour>
    </StyledMainWeather>
  );
};

export default MainWeather;
