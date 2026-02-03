import { describe, expect, test, vi } from "vitest";
import { renderHook, waitFor } from '@testing-library/react';
import { useHeroSummary } from "./useHeroSummary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { getSummaryAction } from "../actions/get-summary.action";
import type { SummaryInformationResponse } from "../types/get-summary.response";

const tanStackCustomProvider = () => {

   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            retry: false,
         },
      },
   });

   return ({ children }: PropsWithChildren) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
   );
};

vi.mock('../actions/get-summary.action', () => ({
   getSummaryAction: vi.fn(),
}));

const mockGetSummaryAction = vi.mocked(getSummaryAction);

describe('useHeroSummary', () => {

   test('should return the initial state (isLoading)', () => {
      // Assert
      const { result } = renderHook(() => useHeroSummary(), {
         wrapper: tanStackCustomProvider()
      });
      // Act
      // Arrange
      expect(result.current.isLoading).toBeTruthy();
      expect(result.current.data).toBeUndefined();
      expect(result.current.error).toBeNull();
   });

   test('Should return success state with data when API call is successful', async () => {
      // Assert
      const mockSummaryData = {
         totalHeroes: 10,
         strongestHero: {
            id: '1',
            name: 'Superman',
         },
         smartestHero: {
            id: '2',
            name: 'Batman',
         },
         heroCount: 18,
         villainCount: 7
      } as SummaryInformationResponse;
      mockGetSummaryAction.mockResolvedValue(mockSummaryData);
      const { result } = renderHook(() => useHeroSummary(), {
         wrapper: tanStackCustomProvider()
      });
      // Act
      // Arrange
      await waitFor(() => {
         expect(result.current.isSuccess).toBeTruthy();
      });
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.error).toBeNull();
      expect(result.current.data).toEqual(mockSummaryData);
      expect(mockGetSummaryAction).toHaveBeenCalled();
   });

   test('Should return error state when API call fails', async () => {
      // Assert
      const error = 'Failed to fetch summary data';
      const mockError = new Error(error);
      mockGetSummaryAction.mockRejectedValue(mockError);
      const { result } = renderHook(() => useHeroSummary(), {
         wrapper: tanStackCustomProvider()
      });
      // Act
      // Arrange
      await waitFor(() => {
         expect(result.current.isError).toBeTruthy();
      });
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.error).toBeDefined();
      expect(mockGetSummaryAction).toHaveBeenCalled();
      expect(result.current.error?.message).toBe(error);

   });

});