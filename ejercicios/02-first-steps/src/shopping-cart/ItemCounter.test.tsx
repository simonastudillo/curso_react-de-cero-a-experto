import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {

   test('should render with default values', () => {
      // Arrange
      const name = 'Test item';
      render(<ItemCounter itemName={name} />);
      // Act
      const textName = screen.getByText(name);
      // Assert
      expect(textName).toBeDefined();
      expect(textName).not.toBeNull();
   });

   test('should render with custom quantity', () => {
      // Arrange
      const name = 'Test item';
      const quantity = 10;
      render(<ItemCounter itemName={name} quantity={quantity} />);
      // Act
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
      render(<ItemCounter itemName={name} quantity={quantity} />);
      // Act
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
      render(<ItemCounter itemName={name} quantity={quantity} />);
      // Act
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
      render(<ItemCounter itemName={name} quantity={quantity} />);
      // Act
      const [, buttonDecrease] = screen.getAllByRole('button');
      fireEvent.click(buttonDecrease);
      const textQuantity = screen.getByText(quantityExpected);
      // Assert
      expect(textQuantity).toBeDefined();
   });

   test('should change to red when count is 1', () => {
      // Arrange
      const name = 'Test item';
      const quantity = 1;
      const colorExpected = 'red';
      render(<ItemCounter itemName={name} quantity={quantity} />);
      // Act
      const itemText = screen.getByText(name);
      const colorText = itemText.style.color;
      // Assert
      expect(colorText).toBe(colorExpected);
   });

   test('should change to black when count is greater than 1', () => {
      // Arrange
      const name = 'Test item';
      const quantity = 2;
      const colorExpected = 'black';
      render(<ItemCounter itemName={name} quantity={quantity} />);
      // Act
      const itemText = screen.getByText(name);
      const colorText = itemText.style.color;
      // Assert
      expect(colorText).toBe(colorExpected);
   });


})