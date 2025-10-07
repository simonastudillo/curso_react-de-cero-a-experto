import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
   useCounter: () => ({
      counter: 20,
      handleAdd: handleAddMock,
      handleSubstract: handleSubstractMock,
      handleReset: handleResetMock
   })
}));

describe('MyCounterApp', () => {

   test('Should render the component', () => {
      // Arrange
      const h1Expected = `counter: 20`;
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

   test('Should call handleAdd if button is clicked', () => {
      // Arrange
      render(<MyCounterApp />);
      // Act
      const addButton = screen.getByRole('button', { name: '+1' });
      fireEvent.click(addButton);
      // Assert
      expect(handleAddMock).toHaveBeenCalled();
      expect(handleAddMock).toHaveBeenCalledTimes(1);
      expect(handleSubstractMock).not.toHaveBeenCalled();
      expect(handleResetMock).not.toHaveBeenCalled();
   });

});