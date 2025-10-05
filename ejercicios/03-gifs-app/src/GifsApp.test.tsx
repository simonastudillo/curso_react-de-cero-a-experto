import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { GifsApp } from './GifsApp';

describe('GifsApp', () => {

   test('Should render component properly', () => {
      // Arrange
      const { container } = render(<GifsApp />);
      // Act
      // Assert
      expect(container).toMatchSnapshot();
   })
})