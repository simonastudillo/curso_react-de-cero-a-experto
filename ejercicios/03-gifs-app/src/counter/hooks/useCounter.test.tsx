import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {

   test('Should initialize with default with 10', () => {
      // Arrange
      const defaultValue = 10;
      const { result } = renderHook(() => useCounter());
      // Act
      // Assert
      expect(result.current.counter).toBe(defaultValue);
   });

   test('Should initialize with default with value', () => {
      // Arrange
      const initialValue = 20;
      const { result } = renderHook(() => useCounter(initialValue));
      // Act
      // Assert
      expect(result.current.counter).toBe(initialValue);
   });

   test('Should increment counter when handleAdd is called', () => {
      // Arrange
      const valueExpected = (10 + 2);
      const { result } = renderHook(() => useCounter());
      // Act
      act(() => {
         result.current.handleAdd();
      });
      act(() => {
         result.current.handleAdd();
      });
      // Assert
      expect(result.current.counter).toBe(valueExpected);
   });

   test('Should decrement counter when handleSubtract is called', () => {
      // Arrange
      const valueExpected = (10 - 1);
      const { result } = renderHook(() => useCounter());
      // Act
      act(() => {
         result.current.handleSubtract();
      });
      // Assert
      expect(result.current.counter).toBe(valueExpected);
   });

   test('Should reset counter when handleReset is called', () => {
      // Arrange
      const valueExpectedOnSubtract = 9;
      const valueExpected = 10;
      const { result } = renderHook(() => useCounter());

      // Act
      act(() => {
         result.current.handleSubtract();
      });
      // Assert
      expect(result.current.counter).toBe(valueExpectedOnSubtract);

      // Act
      act(() => {
         result.current.handleReset();
      });
      // Assert
      expect(result.current.counter).toBe(valueExpected);
   });

});