import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { FavoriteHeroContext, FavoriteHeroProvider } from "./FavoriteHeroContext";
import { use } from "react";
import type { Hero } from "../types/hero.interface";


const mockHero = {
   id: '1',
   name: 'Batman'
} as Hero;

const localStorageMock = {
   getItem: vi.fn(),
   setItem: vi.fn(),
   removeItem: vi.fn(),
   clear: vi.fn(),
}

Object.defineProperty(window, 'localStorage', {
   value: localStorageMock
})

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
         <button data-testid="toggle-favorite"
            onClick={() => toggleFavorite(mockHero)}>
            Toggle Favorite
         </button>
         <div data-testid="is-favorite">
            {isFavorite(mockHero) ? 'Yes' : 'No'}
         </div>
      </div>
   );
};

const renderContextTest = () => {
   return render(<FavoriteHeroProvider><TestComponent /></FavoriteHeroProvider>);
};

describe('FavoriteHeroContext', () => {

   beforeEach(() => {
      vi.clearAllMocks();
   });

   test('Should initialize with default values', async () => {
      // Assert
      renderContextTest();
      // Act
      // screen.debug();
      // Arrange
      expect(screen.getByTestId('favorite-count').textContent).toBe('0');
      expect(screen.getByTestId('favorite-list').children.length).toBe(0);
   });


   test('Should add hero to favorites when toggleFavorite is called with new hero', async () => {
      // Assert
      renderContextTest();
      const button = screen.getByTestId('toggle-favorite');
      // Act
      fireEvent.click(button);
      screen.debug();
      // Arrange
      expect(screen.getByTestId('is-favorite').textContent).toBe('Yes');
      expect(screen.getByTestId('favorite-hero').textContent).toBe('Batman');
      expect(screen.getByTestId('favorite-count').textContent).toBe('1');
      // expect(JSON.parse(localStorage.getItem('favoriteHeroes') || '[]')).toEqual([mockHero]);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('favoriteHeroes', JSON.stringify([mockHero]));
   });


   test('Should remove hero from favorites when toggleFavorite is called', async () => {
      // Assert
      localStorageMock.getItem.mockReturnValue(JSON.stringify([mockHero]));
      renderContextTest();
      const button = screen.getByTestId('toggle-favorite');
      // Act
      fireEvent.click(button);
      screen.debug();
      // Arrange
      expect(screen.getByTestId('is-favorite').textContent).toBe('No');
      expect(screen.getByTestId('favorite-count').textContent).toBe('0');
      expect(screen.queryByTestId('favorite-hero')).toBeNull();
      expect(localStorageMock.setItem).toHaveBeenCalled();
      expect(localStorageMock.setItem).toHaveBeenCalledWith('favoriteHeroes', JSON.stringify([]));
   });

});