import React from 'react';

const Line = ({width, color, height = 1}) => {
  return (
    <div
      style={{
        height,
        width: `${width}%`,
        background: color
      }}
    />
  );
};

export default Line;