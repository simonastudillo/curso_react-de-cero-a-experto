import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import type { Gif } from "../interfaces/gif.interface";
import * as gifsActions from "../actions/get-gifs-by-query.action";


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

   test('Should return a list of gifs from cache', async () => {
      // Arrange
      const { result } = renderHook(() => useGifs());
      // Act
      await act(async () => {
         await result.current.handleSearch('goku');
      });
      vi.spyOn(gifsActions, 'GetGifsByQuery')
         .mockRejectedValue(new Error('No está obteniend el valor desde el cache'));

      await act(async () => {
         await result.current.handleSearch('goku');
      });
      // Assert
      expect(result.current.gifs.length).toBe(10);
   });

   test('Should return no more than 8 previous term', async () => {
      // Arrange
      const preveiousTermMaxExpected = 8;
      const preveiousTermExpected = [
         'goku9',
         'goku8',
         'goku7',
         'goku6',
         'goku5',
         'goku4',
         'goku3',
         'goku2',
      ];
      const { result } = renderHook(() => useGifs());
      // Act
      vi.spyOn(gifsActions, 'GetGifsByQuery')
         .mockResolvedValue([]);
      await act(async () => {
         await result.current.handleSearch('goku1');
      });
      await act(async () => {
         await result.current.handleSearch('goku2');
      });
      await act(async () => {
         await result.current.handleSearch('goku3');
      });
      await act(async () => {
         await result.current.handleSearch('goku4');
      });
      await act(async () => {
         await result.current.handleSearch('goku5');
      });
      await act(async () => {
         await result.current.handleSearch('goku6');
      });
      await act(async () => {
         await result.current.handleSearch('goku7');
      });
      await act(async () => {
         await result.current.handleSearch('goku8');
      });
      await act(async () => {
         await result.current.handleSearch('goku9');
      });
      // Assert
      expect(result.current.previousTerms.length).toBe(preveiousTermMaxExpected);
      expect(result.current.previousTerms).toStrictEqual(preveiousTermExpected);
   });

});