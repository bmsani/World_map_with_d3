import { json } from 'd3';
import { useEffect, useState } from 'react';
import * as topojson from "topojson-client";

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const useData = () => {
  
  const [data, setData] = useState(null)
  console.log(data);
    
        useEffect(() => {
          const row = d => {
            // d['sepal.length'] = +d['sepal.length']
            // d['sepal.width'] = +d['sepal.width']
            // d['petal.length'] = +d['petal.length']
            // d['petal.width'] = +d['petal.width']
            d.temperature = +d.temperature
            d.timestamp = new Date(d.timestamp);
            return d;
          }
          json(jsonUrl, row).then(topojsonData => {
            console.log(topojsonData);
            const cngData = topojson.feature(topojsonData, topojsonData.objects.countries)
            setData(cngData)
          })

          // csv(csvUrl).then(data => {
          //   data.map(d => {
          //     console.log(d["petal.length"])
          //   })
          // })
        }, [])
    return data;
};

export default useData;