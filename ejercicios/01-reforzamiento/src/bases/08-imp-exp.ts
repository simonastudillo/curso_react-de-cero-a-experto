import { type Hero, heroes } from '../data/heroes.data';

const getHeroById = ( id: number ): Hero => {
   const hero = heroes.find(hero => hero.id === id);

   if (!hero) throw new Error(`No existe un héro con id ${id} `);

   return hero;
}

console.log(getHeroById(5));