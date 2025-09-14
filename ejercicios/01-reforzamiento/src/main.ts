import './style.css';
import './bases/02-template-string';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
   <div>
      <h1>Hola mundo</h1>
   </div>
`