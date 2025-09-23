import { describe, expect, test } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render } from "@testing-library/react";


describe('FirstStepsApp', () => {

   test('should match snapshot', () => {
      // Arrange
      const { container } = render(<FirstStepsApp />);
      // Assert
      expect(container).toMatchSnapshot();
   });

});