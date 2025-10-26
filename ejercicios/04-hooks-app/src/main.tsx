import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
import './index.css';
import { MemoHook } from './06-memos/MemoHook';
// import { ScrambleWords } from './05-useReducer/ScrambleWords';
// import { TasksApp } from './05-useReducer/TaskApp';
// import { PokemonPage } from './03-examples/PokePage';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLight } from './01-useState/TrafficLight';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      {/* <HooksApp /> */}
      {/* <TrafficLight /> */}
      {/* <TrafficLightWithEffect /> */}
      {/* <TrafficLightWithHook /> */}
      {/* <PokemonPage /> */}
      {/* <FocusScreen /> */}
      {/* <TasksApp /> */}
      {/* <ScrambleWords /> */}
      <MemoHook />
   </StrictMode>,
)
