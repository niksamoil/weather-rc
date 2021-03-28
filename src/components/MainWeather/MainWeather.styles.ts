import styled from 'styled-components';
import img from '../../assets/images/fog-6079632_1920.jpg';

const StyledMainWeather = styled.div`
  background: url(${img}) center center/cover no-repeat;
  height: 460px;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px 0;
`;

const StyledLatestLocation = styled.div`
  margin-top: 220px;
`;

const StyledDayAndHour = styled.div`
  display: flex;
  padding: 0 50px;
  margin-top: 14px;
  position: relative;
  .daily,
  .hourly {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    color: white;
    font-size: 18px;
    span {
      margin-left: 10px;
    }
  }
  .daily::after {
    content: '';
    position: absolute;
    top: 39px;
    left: 0;
    width: 170px;
    height: 4px;
    background-color: #ecb43f;
  }
  .hourly::after {
    content: '';
    position: absolute;
    top: 39px;
    left: 170px;
    width: 170px;
    height: 4px;
    background-color: #d17af1;
  }
`;

export { StyledMainWeather, StyledDiv, StyledLatestLocation, StyledDayAndHour };
