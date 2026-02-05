import { beforeEach, describe, expect, test, vi } from "vitest";
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { usePaginatedHero } from "./usePaginatedHero";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

vi.mock('../actions/get-heroes-by-page.action', () => ({
   getHeroesByPageAction: vi.fn(),
}));

const mockGetHeroesByPageAction = vi.mocked(getHeroesByPageAction);


const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: false,
      },
   },
});

const tanStackCustomProvider = () => {

   return ({ children }: PropsWithChildren) => (
      <QueryClientProvider client= { queryClient } > { children } </QueryClientProvider>
   );
};


describe('usePaginatedHero', () => {

   beforeEach(() => {
      vi.clearAllMocks();
      queryClient.clear();
   });

   test('should return the initial state (isLoading)', () => {
      // Assert
      const { result } = renderHook(() => usePaginatedHero({
         page: 1,
         limit: 6
      }), {
         wrapper: tanStackCustomProvider()
      });
      // Act
      // Arrange
      expect(result.current.isLoading).toBeTruthy();
      expect(result.current.data).toBeUndefined();
      expect(result.current.error).toBeNull();
   });

   test('Should return success page with data when API call success', async () => {
      // Assert
      const mockHeroData = {
         total: 20,
         pages: 4,
         heroes: [],
      };

      mockGetHeroesByPageAction.mockResolvedValue(mockHeroData);
      const page = 1;
      const limit = 6;
      const { result } = renderHook(() => usePaginatedHero({
         page: page,
         limit: limit
      }), {
         wrapper: tanStackCustomProvider()
      });
      // Act
      // Arrange
      await waitFor(() => {
         expect(result.current.isSuccess).toBeTruthy();
      });
      expect(result.current.status).toBe('success');
      expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(page, limit);
   });

   test('Should call getHeroesByPageAction with arguments', async () => {
      // Assert
      const page = 1;
      const limit = 6;
      const category = 'heroes';
      const mockHeroData = {
         total: 20,
         pages: 4,
         heroes: [],
      };

      mockGetHeroesByPageAction.mockResolvedValue(mockHeroData);
      const { result } = renderHook(() => usePaginatedHero({
         page: page,
         limit: limit,
         category: category
      }), {
         wrapper: tanStackCustomProvider()
      });
      // Act
      // Arrange
      await waitFor(() => {
         expect(result.current.isSuccess).toBeTruthy();
      });
      expect(result.current.status).toBe('success');
      expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(page, limit, category);
   });

});