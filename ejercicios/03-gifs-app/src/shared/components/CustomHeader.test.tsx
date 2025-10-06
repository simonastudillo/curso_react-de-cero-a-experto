import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";
import { render, screen } from "@testing-library/react";

describe('CustomHeader', () => {

   const title = 'Hola mundo';

   test('Should render the title correctly', () => {
      // Arrange
      const { container } = render(<CustomHeader title={title} />);
      // Act
      const titleRender = container.querySelector('h1');
      // Assert
      expect(titleRender?.innerHTML).toBe(title);
   });

   test('Should render the description when provided', () => {
      // Arrange
      const description = 'Encuentra tus gifs';
      const { container } = render(<CustomHeader title={title} description={description} />);
      // Act
      const descriptionProvider = container.querySelector('p');
      const paragraph = screen.getByRole('paragraph');
      // Assert
      expect(descriptionProvider?.innerHTML).toBe(description);
      expect(paragraph?.innerHTML).toBe(description);

   });

   test('Should not render the description when not provided', () => {
      // Arrange
      const { container } = render(<CustomHeader title={title} />);
      // Act
      const descriptionProvider = container.querySelector('p');
      const divElement = container.querySelector('.content-center');
      const p = divElement?.querySelector('p');
      // Assert
      expect(descriptionProvider).toBeNull();
      expect(p).toBeNull();
   });

});