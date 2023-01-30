// import {  } from "d3";

import Bars from "./component/Bars";
import useData from './component/useData'


const width = 1260;
const height = 606;



function App() {
  const data = useData();
  if (!data) {
    return <pre>...loading</pre>
  }



  return (
    <svg width={width} height={height}>
      
        <Bars
          data={data}
         
          
        />
      
    </svg>
  )
}

export default App;
