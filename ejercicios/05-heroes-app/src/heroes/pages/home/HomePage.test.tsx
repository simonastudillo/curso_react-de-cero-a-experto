import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { HomePage } from "./HomePage";
import { fireEvent, render, screen } from "@testing-library/react";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";

vi.mock('@/heroes/hooks/usePaginatedHero');

const mockUsePaginateHero = vi.mocked(usePaginatedHero);

mockUsePaginateHero.mockReturnValue({
   data:[],
   isLoading: false,
   isError: false,
   isSuccess: true,
} as unknown as ReturnType<typeof usePaginatedHero>);

const queryClient = new QueryClient();

const renderHomePage = (initialEntries: string[] = ['/']) => {
   return render(
      <MemoryRouter initialEntries={initialEntries}>
         <FavoriteHeroProvider>
            <QueryClientProvider client={queryClient}>
               <HomePage />
            </QueryClientProvider>
         </FavoriteHeroProvider>
      </MemoryRouter>
   );
};

describe('HomePage', () => {

   beforeEach(() => {
      mockUsePaginateHero.mockClear();
   });

   test('Should render HomePage with default values', () => {
      const { container } = renderHomePage();
      expect(container).toMatchSnapshot();
   });

   test('Should call usePaginatedHero with default values', () => {
      renderHomePage();
      expect(mockUsePaginateHero).toHaveBeenCalledWith({
         "category": "all",
         "limit": 6,
         "page": 1,
      });
   })

   test('Should call usePaginatedHero with custom query parameters', () => {
      renderHomePage(['/?page=2&limit=10&category=heroes']);
      expect(mockUsePaginateHero).toHaveBeenCalledWith({
         "category": "heroes",
         "limit": 10,
         "page": 2,
      });
   })

   test('Should call usePaginatedHero with default page and same limit on tab clicked', () => {
      renderHomePage(['/?tab=favorites&page=2&limit=10']);
      const [,,, villainsTab] = screen.getAllByRole('tab');

      fireEvent.click(villainsTab);
      expect(mockUsePaginateHero).toHaveBeenCalledWith({
         "category": "villain",
         "limit": 10,
         "page": 1,
      });
      
   });
});