import { Home } from "lucide-react";
import { MemoryRouter } from "react-router";
import { describe, expect, test, vi } from "vitest";
import { HomePage } from "./HomePage";
import { render } from "@testing-library/react";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
         <QueryClientProvider client={queryClient}>
            <HomePage />
         </QueryClientProvider>
      </MemoryRouter>
   );
};

describe('HomePage', () => {

   test('Should render HomePage with default values', () => {
      const { container } = renderHomePage();
      expect(container).toMatchSnapshot();
   });
});