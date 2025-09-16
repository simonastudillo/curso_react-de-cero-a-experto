import { useState } from 'react';
import './App.css';

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1>Hola mundo</h1>
         <p>Soy un parrafo</p>
      </>
   )
}

export default App
