import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import StyledLatestLocation from './LatestLocation.styles';

const LatestLocation: React.FC = () => {
  return (
    <StyledLatestLocation>
      <button type="submit" className="latest-location">
        <span>Latest Location</span>
        <FontAwesomeIcon icon={faMapMarkedAlt} className="font-awesome" />
      </button>
    </StyledLatestLocation>
  );
};

export default LatestLocation;
