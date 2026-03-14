import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FavoriteHeroContext, FavoriteHeroProvider } from "./FavoriteHeroContext";
import { use } from "react";

const TestComponent = () => {

   const {  
      favoriteCount,
      favorites,
      isFavorite,
      toggleFavorite,
   } = use(FavoriteHeroContext);

   return (
      <div>
         <div data-testid="favorite-count">{favoriteCount}</div>
         <div data-testid="favorite-list">
            {
               favorites.map(hero => (
                  <div key={hero.id} data-testid="favorite-hero">
                     {hero.name}
                  </div>
               ))
            }
         </div>
      </div>
   );
};

const renderContextTest = () => {
   return render(<FavoriteHeroProvider><TestComponent /></FavoriteHeroProvider>);
};

describe('FavoriteHeroContext', () => {

   test('Should initialize with default values', async () => {
      // Assert
      renderContextTest();
      // Act
      screen.debug();
      // Arrange
      expect(screen.getByTestId('favorite-count').textContent).toBe('0');
      expect(screen.getByTestId('favorite-list').children.length).toBe(0);
   });

});