import { fireEvent, render, screen } from "@testing-library/react";
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

   test('should increase count when +1 button is pressed', () => {
      // Arrange
      const name = 'Test item';
      const quantity = 1;
      const quantityExpected = (quantity + 1);
      // Act
      render(<ItemCounter itemName={name} quantity={quantity} />);
      const [buttonAdd] = screen.getAllByRole('button');
      fireEvent.click(buttonAdd);
      const textQuantity = screen.getByText(quantityExpected);
      // Assert
      expect(textQuantity).toBeDefined();
   });

   test('should decrease count when -1 button is pressed', () => {
      // Arrange
      const name = 'Test item';
      const quantity = 5;
      const quantityExpected = (quantity - 1);
      // Act
      render(<ItemCounter itemName={name} quantity={quantity} />);
      const [, buttonDecrease] = screen.getAllByRole('button');
      fireEvent.click(buttonDecrease);
      const textQuantity = screen.getByText(quantityExpected);
      // Assert
      expect(textQuantity).toBeDefined();
   })

   test('should decrease count when -1 button is pressed and quantity is 1', () => {
      // Arrange
      const name = 'Test item';
      const quantity = 1;
      const quantityExpected = (quantity);
      // Act
      render(<ItemCounter itemName={name} quantity={quantity} />);
      const [, buttonDecrease] = screen.getAllByRole('button');
      fireEvent.click(buttonDecrease);
      const textQuantity = screen.getByText(quantityExpected);
      // Assert
      expect(textQuantity).toBeDefined();
   })


})