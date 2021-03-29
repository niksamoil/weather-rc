import styled from 'styled-components';

const StyledTodayWeather = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  padding: 25px 0 25px 50px;
  line-height: 1;
  .second-block {
    margin-left: 50px;
  }
  .temperature {
    font-size: 100px;
    color: white;
    sup {
      font-size: 60px;
    }
  }
  .day {
    margin-top: 10px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #a9988b;
    text-align: center;
    border-radius: 15px;
    sup {
      align-self: start;
      text-transform: none;
      font-size: 12px;
    }
  }
  .weather-image {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    color: white;
  }
  .wind-speed {
    margin-top: 10px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 17px;
    font-weight: 500;
  }
`;

export default StyledTodayWeather;
