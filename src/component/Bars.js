import React from 'react';
import { geoEqualEarth, geoPath } from 'd3';

const projection = geoEqualEarth();
const path = geoPath(projection)

const Bars = ({ data}) => {
  return (
    <g className='bars'>
      
      {data.features.map(feature =>
        (
          <path d ={path(feature)} />
        ))}
    </g>
  );
};

export default Bars;