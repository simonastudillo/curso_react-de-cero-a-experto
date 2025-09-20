import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {

   test('should render with default values', () => {
      // Arrange
      const name = 'Test item';
      // Act
      render(<ItemCounter itemName={name} />);
      const textName = screen.getByText(name);
      // Assert
      expect(textName).toBeDefined();
      expect(textName).not.toBeNull();
   });

   test('should render with custom quantity', () => {
      // Arrange
      const name = 'Test item';
      const quantity = 10;
      // Act
      render(<ItemCounter itemName={name} quantity={quantity} />);
      const textQuantity = screen.getByText(quantity);
      // Assert
      expect(textQuantity).toBeDefined();
      expect(textQuantity).not.toBeNull();
   });

})