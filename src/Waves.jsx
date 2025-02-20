import React from 'react';

const Waves = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'absolute', bottom: 0 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ width: '100%', height: 'auto' }}
      >
        <path
          fill="#0099ff"
          fillOpacity="0.7"
          d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,160C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Waves;