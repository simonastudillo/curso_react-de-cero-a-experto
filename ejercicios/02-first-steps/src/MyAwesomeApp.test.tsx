import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {

   test('should render firstName and lastName', () => {
      // Arrange
      const { container } = render(<MyAwesomeApp />);
      // Act
      const htmlContainer = container.innerHTML;
      screen.debug();
      // Assert
   })

});