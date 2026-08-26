
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function RoadOutButton() {
  const location = useLocation();
  if (location.pathname !== '/theroadout') {
    return null;
  }
  return (
    <>
      <Link className="road-out-button"
        to="/parallax"
      >
        Take the Road Out
      </Link>
    </>
  );
}

function TheRoadOut() {

  return (
    <>
    </>
  )
}

export default TheRoadOut;
