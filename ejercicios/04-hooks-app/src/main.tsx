import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
import './index.css';
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLight } from './01-useState/TrafficLight';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      {/* <HooksApp /> */}
      {/* <TrafficLight /> */}
      {/* <TrafficLightWithEffect /> */}
      <TrafficLightWithHook />
   </StrictMode>,
)
