import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import type { Gif } from "../interfaces/gif.interface";

// const handleSearchMock = vi.fn();
// const handleTermClickMock = vi.fn();

// vi.mock('./useGifs', () => ({
//    useGifs: () => ({
//       gifs: [],
//       previousTerms: [],
//       handleSearch: handleSearchMock,
//       handleTermClick: handleTermClickMock
//    })
// }));

describe('useGifs', () => {

   test('Should return default values and methods', () => {
      // Arrange
      const defaultValueGifs: Gif[] = [];
      const defaultValuePreviousTerms: string[] = [];
      const { result } = renderHook(() => useGifs());
      // Act
      // Assert
      expect(result.current.gifs).toStrictEqual(defaultValueGifs);
      expect(result.current.gifs.length).toBe(0);
      expect(result.current.previousTerms).toStrictEqual(defaultValuePreviousTerms);
      expect(result.current.previousTerms.length).toBe(0);
      expect(result.current.handleSearch).toBeDefined();
      expect(result.current.handleTermClick).toBeDefined();

   });

   test('Should return a list of gifs', async () => {
      // Arrange
      const { result } = renderHook(() => useGifs());
      await act(async () => {
         await result.current.handleSearch('goku');
      });
      expect(result.current.gifs.length).toBe(10);
   });

   test('Should return a list of gifs when handleTermClick is called', async () => {
      // Arrange
      const { result } = renderHook(() => useGifs());
      await act(async () => {
         await result.current.handleTermClick('goku');
      });
      expect(result.current.gifs.length).toBe(10);
   });

});