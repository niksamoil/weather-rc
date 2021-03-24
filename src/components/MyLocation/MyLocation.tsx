import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import StyledMyLocation from './MyLocation.styles';

const MyLocation: React.FC = () => {
  return (
    <StyledMyLocation>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" color="white" />
      <span className="location">New York</span>
      <span className="local-time">12:20 pm</span>
    </StyledMyLocation>
  );
};

export default MyLocation;
