import styled from 'styled-components';

const StyledHour = styled.ul`
  display: flex;
  li {
    padding: 25px 0;
    list-style: none;
    border-left: 1px solid #9a918b;
  }
  .day-in-week {
    display: block;
    margin: 0 auto;
    width: 130px;
    .hour-value {
      margin: 0 auto;
      color: white;
      width: 60px;
      height: 25px;
      line-height: 25px;
      background-color: #847a726b;
      text-align: center;
      border-radius: 15px;
    }
    .weather-icon {
      margin-top: 15px;
      text-align: center;
      color: white;
      font-size: 35px;
    }
    .temperature {
      margin-top: 15px;
      color: white;
      font-size: 21px;
      text-align: center;
    }
  }
`;

export default StyledHour;
