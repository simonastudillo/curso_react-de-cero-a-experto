import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import SearchPage from "./SearchPage";
import { MemoryRouter } from "react-router";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchHeroes } from "@/heroes/hooks/useSearchHeroes";

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

vi.mock('@/components/custom/CustomJumbotron', () => ({
   CustomJumbotron: () => <div data-testid="custom-jumbotron">CustomJumbotron</div>
}));

describe('SearchPage', () => {

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
});