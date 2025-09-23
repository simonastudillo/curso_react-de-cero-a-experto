import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";


vi.mock("./shopping-cart/ItemCounter", () => ({
   ItemCounter: () => <div data-testid="ItemCounter" />
}));

describe('FirstStepsApp', () => {

   test('should match snapshot', () => {
      // Arrange
      const { container } = render(<FirstStepsApp />);
      // Assert
      expect(container).toMatchSnapshot();
   });

   test('Should render the correct number of ItemCounter components', () => {
      // Arrange
      const divsExpected = 3;
      render(<FirstStepsApp />);
      // Act
      const itemCounters = screen.getAllByTestId('ItemCounter');
      // Assert
      expect(itemCounters.length).toBe(divsExpected);
   });

});