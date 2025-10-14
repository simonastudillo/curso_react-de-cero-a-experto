import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { CustomSearchBar } from "./CustomSearchBar";

describe('CustomSearchBar', () => {

   test('Should render CustomSearchBar correctly', () => {
      const { container } = render(<CustomSearchBar onQuery={() => { }} />);

      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');

      expect(container).toMatchSnapshot();
      expect(input).toBeDefined();
      expect(button).toBeDefined();
   });

   test('Should call onQuery with the current value after 700ms', async () => {
      const onQuery = vi.fn();
      const inputValue = 'test';
      const { } = render(<CustomSearchBar onQuery={onQuery} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: `${inputValue}` } });

      // await new Promise(resolve => setTimeout(resolve, 701));
      await waitFor(() => {
         expect(onQuery).toHaveBeenCalled();
         expect(onQuery).toHaveBeenCalledWith(inputValue);
      });
   });

   test('Should call onQuery only once with the last value (debounce', async () => {
      const onQuery = vi.fn();
      const inputValue = 'malo';
      const { } = render(<CustomSearchBar onQuery={onQuery} />);

      const input = screen.getByRole('textbox');
      for (let i = 0; i < inputValue.length; i++) {
         fireEvent.change(input, { target: { value: `${inputValue.substring(0, i + 1)}` } });
      }

      // await new Promise(resolve => setTimeout(resolve, 701));
      await waitFor(() => {
         expect(onQuery).toHaveBeenCalled();
         expect(onQuery).toHaveBeenCalledTimes(1);
         expect(onQuery).toHaveBeenCalledWith(inputValue);
      });
   });

   test('Should call onQuery when button clicked with the input value', () => {
      const onQuery = vi.fn();
      const inputValue = 'malo';
      const { } = render(<CustomSearchBar onQuery={onQuery} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: `${inputValue}` } });
      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(onQuery).toHaveBeenCalledTimes(1);
      expect(onQuery).toHaveBeenCalledWith(inputValue);
   });

   test('Should the input has the correct placeholder value', () => {
      const placeholder = 'Buscar...';
      const { } = render(<CustomSearchBar onQuery={() => { }} placeholder={placeholder} />);

      const renderPlaceholder = screen.getByPlaceholderText(placeholder);

      expect(renderPlaceholder).toBeDefined();
   });

});