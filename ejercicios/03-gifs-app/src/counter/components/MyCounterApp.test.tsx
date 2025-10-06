import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {

   test('Should render component with default value', () => {
      // Arrange
      const h1Expected = `counter: 5`;
      render(<MyCounterApp />);
      // Act
      const h1 = screen.getByRole('heading', { level: 1 });
      const addButton = screen.getByRole('button', { name: '+1' });
      const subtractButton = screen.getByRole('button', { name: '-1' });
      const resetButton = screen.getByRole('button', { name: 'Reset' });
      // Assert
      expect(h1.innerHTML).toContain(h1Expected);
      expect(addButton).toBeDefined();
      expect(subtractButton).toBeDefined();
      expect(resetButton).toBeDefined();
   });

   test('Should increment the counter', () => {
      // Arrange
      const h1Expected = `counter: 6`;
      render(<MyCounterApp />);
      // Act
      const h1 = screen.getByRole('heading', { level: 1 });
      const addButton = screen.getByRole('button', { name: '+1' });
      fireEvent.click(addButton);
      // Assert
      expect(h1.innerHTML).toContain(h1Expected);
   });

   test('Should decrement the counter', () => {
      // Arrange
      const h1Expected = `counter: 4`;
      render(<MyCounterApp />);
      // Act
      const h1 = screen.getByRole('heading', { level: 1 });
      const subtractButton = screen.getByRole('button', { name: '-1' });
      fireEvent.click(subtractButton);
      // Assert
      expect(h1.innerHTML).toContain(h1Expected);
   });

   test('Should reset the counter', () => {
      // Arrange
      const h1Expected = `counter: 5`;
      render(<MyCounterApp />);
      // Act
      const h1 = screen.getByRole('heading', { level: 1 });
      const subtractButton = screen.getByRole('button', { name: '-1' });
      const resetButton = screen.getByRole('button', { name: 'Reset' });
      fireEvent.click(subtractButton);
      fireEvent.click(resetButton);
      // Assert
      expect(h1.innerHTML).toContain(h1Expected);
   });

});