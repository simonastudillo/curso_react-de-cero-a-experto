import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SearchControls } from "./SearchControls";
import { MemoryRouter } from "react-router";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (typeof window.ResizeObserver === 'undefined') {
   class ResizeObserver {
      observe() { }
      unobserve() { }
      disconnect() { }
   }
   window.ResizeObserver = ResizeObserver;
}

const queryClient = new QueryClient();

const renderWithRouter = (initialEntries: string[] = ['/']) => {
   return render(
      <MemoryRouter initialEntries={initialEntries}>
         <FavoriteHeroProvider>
            <QueryClientProvider client={queryClient}>
               <SearchControls />
            </QueryClientProvider>
         </FavoriteHeroProvider>
      </MemoryRouter>
   );
};

describe("SearchControls", () => {

   test('Should render SearchControls with default values', () => {
      const { container } = renderWithRouter();
      expect(container).toMatchSnapshot();
   });

});