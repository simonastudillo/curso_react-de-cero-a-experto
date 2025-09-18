import { render, screen } from "@testing-library/react";
import { describe, test, expect } from 'vitest';
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {

   test('should render firstName and lastName', () => {
      // Arrange
      const expectFirstName = 'Fernando';
      const expectLastName = 'Herrera';
      // Act
      const { container } = render(<MyAwesomeApp />);
      const h1 = container.querySelector('h1');
      const h3 = container.querySelector('h3');
      // Assert
      expect(h1?.innerHTML).toContain(expectFirstName);
      expect(h3?.innerHTML).toContain(expectLastName);
   })

   test('should render firstName and lastName - screen', () => {
      // Arrange
      const expectFirstName = 'Fernando';
      const expectLastName = 'Herrera';
      // Act
      render(<MyAwesomeApp />);
      const h1 = screen.getByTestId('first-name-title');
      const h3 = screen.getByTestId('last-name-title');
      // Assert
      expect(h1?.innerHTML).toContain(expectFirstName);
      expect(h3?.innerHTML).toContain(expectLastName);
   })

   test('should match snapshot', () => {
      // Arrange
      const { container } = render(<MyAwesomeApp />);
      // Assert
      expect(container).toMatchSnapshot();
   })

   test('should match snapshot - screen', () => {
      // Arrange
      render(<MyAwesomeApp />);
      // Act
      const div = screen.getByTestId('div-app');
      // Assert
      expect(div).toMatchSnapshot();
   })

});