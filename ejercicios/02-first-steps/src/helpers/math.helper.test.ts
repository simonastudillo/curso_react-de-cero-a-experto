import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {

   test('Should add two positives numbers', () => {
      // Arrange
      const a = 1;
      const b = 2;
      const expectedResult = (a + b);

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(expectedResult)

   });

   test('Should add two negatives numbers', () => {
      // Arrange
      const a = -1;
      const b = -2;
      const expectedResult = (a + b);

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(expectedResult)

   });

});

describe('subtract', () => {
   test('Should subtract two positives numbers', () => {
      // Arrange
      const a = 4;
      const b = 2;
      const expectedResult = (a - b);

      // Act
      const result = subtract(a, b);

      // Assert
      expect(result).toBe(expectedResult)

   });
   test('Should subtract two negatives numbers', () => {
      // Arrange
      const a = -4;
      const b = -2;
      const expectedResult = (a - b);

      // Act
      const result = subtract(a, b);

      // Assert
      expect(result).toBe(expectedResult)

   });
});

describe('multiply', () => {
   test('Should multiply two positives numbers', () => {
      // Arrange
      const a = 5;
      const b = 5;
      const expectedResult = (a * b);

      // Act
      const result = multiply(a, b);

      // Assert
      expect(result).toBe(expectedResult)

   });
   test('Should multiply two negatives numbers', () => {
      // Arrange
      const a = -5;
      const b = -5;
      const expectedResult = (a * b);

      // Act
      const result = multiply(a, b);

      // Assert
      expect(result).toBe(expectedResult)

   });
   test('Should multiply one number to 0', () => {
      // Arrange
      const a = -5;
      const b = 0;
      const expectedResult = (a * b);

      // Act
      const result = multiply(a, b);

      // Assert
      expect(result).toBe(expectedResult)

   });
});