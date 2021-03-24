import styled from 'styled-components';

const StyledMyLocation = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  margin-top: 20px;
  margin-right: 50px;
  color: white;
  text-align: right;
  svg {
    align-self: flex-end;
  }
  .location {
    margin-top: 15px;
    font-size: 25px;
  }
  .local-time {
    font-size: 20px;
  }
`;

export default StyledMyLocation;
