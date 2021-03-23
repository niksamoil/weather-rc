import styled from 'styled-components';
import img from '../../assets/images/fog-6079632_1920.jpg';

const StyledMainWeather = styled.div`
  background: url(${img}) center center/cover no-repeat;
  height: 600px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { StyledMainWeather, StyledDiv };
