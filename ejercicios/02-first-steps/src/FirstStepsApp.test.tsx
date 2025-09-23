import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp, ItemInCart } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";
import { Props } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((props: ItemInCart) => {
   return (
      <div data-testid="ItemCounter" />
   );
});

vi.mock("./shopping-cart/ItemCounter", () => ({
   ItemCounter: (props: ItemInCart) => mockItemCounter(props),
}));


// vi.mock("./shopping-cart/ItemCounter", () => ({
//    ItemCounter: ({ name, quantity }: unknown) => <div data-testid="ItemCounter" name={name} quantity={quantity} />
// }));

describe('FirstStepsApp', () => {

   afterEach(() => {
      vi.clearAllMocks();
   });

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

   test('Should render ItemCounter with correct props', () => {
      // Arrange
      const calledTimes = 3;
      const product1: Props = { itemName: 'Nintendo Switch 2', quantity: 1 };
      const product2: Props = { itemName: 'Pro controller', quantity: 2 };
      const product3: Props = { itemName: 'Super Smash Bros', quantity: 3 };
      render(<FirstStepsApp />);
      // Act
      // Assert
      expect(mockItemCounter).toHaveBeenCalledTimes(calledTimes);
      expect(mockItemCounter).toHaveBeenCalledWith(product1);
      expect(mockItemCounter).toHaveBeenCalledWith(product2);
      expect(mockItemCounter).toHaveBeenCalledWith(product3);
   });

});