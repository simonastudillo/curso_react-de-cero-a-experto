import { expect, test } from 'vitest';
import { add } from './math.helper';

test('Should add two positives numbers', () => {
   // Arrange
   const a = 1;
   const b = 2;
   const expectedResult = 3;

   // Act
   const result = add(a, b);

   // Assert
   expect(result).toBe(expectedResult)

});