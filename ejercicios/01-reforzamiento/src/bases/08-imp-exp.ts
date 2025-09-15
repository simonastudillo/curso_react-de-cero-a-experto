import { type Hero, heroes, Owner } from '../data/heroes.data';

const getHeroById = ( id: number ): Hero => {
   const hero = heroes.find(hero => hero.id === id);

   if (!hero) throw new Error(`No existe un héro con id ${id} `);

   return hero;
}

console.log(getHeroById(5));

export const getHeroesByOwner = ( owner: Owner ): Hero[] => {
   const filterHeroes = heroes.filter( hero => hero.owner === owner );

   if (!filterHeroes) throw new Error (`No existen heroes para el Owner ${owner}`)

   return filterHeroes;
}