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
      const { container } = render(<CustomSearchBar onQuery={onQuery} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: `${inputValue}` } });

      // await new Promise(resolve => setTimeout(resolve, 701));
      await waitFor(() => {
         expect(onQuery).toHaveBeenCalled();
         expect(onQuery).toHaveBeenCalledWith(inputValue);
      });
   });

});