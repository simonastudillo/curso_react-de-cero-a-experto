import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import SearchPage from "./SearchPage";
import { MemoryRouter } from "react-router";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchHeroes } from "@/heroes/hooks/useSearchHeroes";
import type { Hero } from "@/heroes/types/hero.interface";

const queryClient = new QueryClient();

const renderSearchPage = (initialEntries: string[] = ['/']) => {
   return render(
      <MemoryRouter initialEntries={initialEntries}>
         <FavoriteHeroProvider>
            <QueryClientProvider client={queryClient}>
               <SearchPage />
            </QueryClientProvider>
         </FavoriteHeroProvider>
      </MemoryRouter>
   );
};

vi.mock('@/heroes/hooks/useSearchHeroes');

const mockSearhHeroes = vi.mocked(useSearchHeroes);

vi.mock('./ui/SearchControls', () => ({
   SearchControls: () => <div data-testid="custom-search-controls">CustomSearchControls</div>
}));

vi.mock('@/components/custom/CustomJumbotron', () => ({
   CustomJumbotron: () => <div data-testid="custom-jumbotron">CustomJumbotron</div>
}));

vi.mock('@/heroes/components/HeroGrid', () => ({
   HeroGrid: ({heroes} : {heroes: Hero[]}) => (
      <div data-testid="hero-grid">
         {heroes.map((hero) => (
            <div key={hero.id} data-testid="hero-card">
               {hero.name}
            </div>
         ))
      }
      </div >
   )
}));

describe('SearchPage', () => {

   beforeEach(() => {
      mockSearhHeroes.mockClear();
   });

   test('Should render SearchPage with default values', () => {
      const {container} = renderSearchPage();

      expect(mockSearhHeroes).toHaveBeenCalledWith({
         name: undefined,
         team: undefined,
         category: undefined,
         universe: undefined,
         status: undefined,
         strength: undefined
      });
      expect(container).toMatchSnapshot();
   });

   test('Should call search action with name parameter', () => {
      renderSearchPage(['/search?name=superman']);

      expect(mockSearhHeroes).toHaveBeenCalledWith({
         name: 'superman',
         team: undefined,
         category: undefined,
         universe: undefined,
         status: undefined,
         strength: undefined
      });
   });

   test('Should call search action with stength parameter', () => {
      renderSearchPage(['/search?strength=100']);

      expect(mockSearhHeroes).toHaveBeenCalledWith({
         name: undefined,
         team: undefined,
         category: undefined,
         universe: undefined,
         status: undefined,
         strength: "100"
      });
   });

   test('Should call search action with stength parameter', () => {
      renderSearchPage(['/search?strength=8&name=superman']);

      expect(mockSearhHeroes).toHaveBeenCalledWith({
         name: 'superman',
         team: undefined,
         category: undefined,
         universe: undefined,
         status: undefined,
         strength: "8"
      });
   });

   test('Should render HeroGrid with search results', async () => {
      const mockHeroes = [
         { id: '1', name: 'Clark Kent' } as unknown as Hero,
         { id: '2', name: 'Bruce Wayne'} as unknown as Hero,
      ];

      mockSearhHeroes.mockResolvedValue(mockHeroes as unknown as ReturnType<typeof useSearchHeroes>);
      renderSearchPage();
      await waitFor(() => {
         expect(screen.getByText('Clark Kent')).toBeDefined();
         expect(screen.getByText('Bruce Wayne')).toBeDefined();
      });
   });
});