import type { CSSProperties } from "react";

const firstName = 'Fernando';
const lastName = 'Herrera';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = true;

const address = {
   zipCode: 'ABC-123',
   country: 'Canadá'
}
const myStyles: CSSProperties = {
   backgroundColor: '#ff00ff',
   borderRadius: isActive ? 20 : 10,
   padding: 10,
   marginTop: 30
}

export const MyAwesomeApp = () => {

   return (
      <div data-testid="div-app">
         <h1 data-testid="first-name-title"> {firstName} </h1>
         <h3 data-testid="last-name-title"> {lastName} </h3>

         <p>{2 + 2}</p>
         <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>

         <h1>{isActive ? 'Activo' : 'No activo'}</h1>
         <p
            style={myStyles}
         >{JSON.stringify(address)}</p>
      </div>
   );
}