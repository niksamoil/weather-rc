import styled from 'styled-components';

const StyledLatestLocation = styled.div`
  /* background: green; */
  display: flex;
  justify-content: flex-end;

  .latest-location {
    display: block;
    width: 200px;
    height: 40px;
    background-color: #77ca60;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: white;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    text-transform: uppercase;
    outline: none;
    border: none;
    transition-duration: 0.3s;

    .font-awesome {
      margin-left: 15px;
    }
    &:hover {
      cursor: pointer;
      background-color: #8bd078;
    }
  }
`;

export default StyledLatestLocation;
