import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { CustomPagination } from "./CustomPagination";
import { MemoryRouter } from "react-router";
import type { PropsWithChildren } from "react";

const renderWithRouter = (component: React.ReactElement, initialEntries?: string[]) => {
   return render(
      <MemoryRouter initialEntries={initialEntries}>
         {component}
      </MemoryRouter>
   );
};

vi.mock('../ui/button', () => ({
   Button: ({ children, ...props }: PropsWithChildren) => <button {...props}>{children}</button>
}));

describe('CustomPagination', () => {

   test('Should render component with default values', () => {
      renderWithRouter(<CustomPagination totalPages={5} />);

      // screen.debug();
      expect(screen.getByText('Anterior')).toBeDefined();
      expect(screen.getByText('Siguiente')).toBeDefined();
      expect(screen.getByText('1')).toBeDefined();
      expect(screen.getByText('2')).toBeDefined();
      expect(screen.getByText('3')).toBeDefined();
      expect(screen.getByText('4')).toBeDefined();
      expect(screen.getByText('5')).toBeDefined();
   });

   test('Should disabled previous button on first page', () => {
      renderWithRouter(<CustomPagination totalPages={5} />);

      const previousButton = screen.getByText('Anterior');
      expect(previousButton.getAttributeNames()).toContain('disabled');
      // screen.debug(previousButton);
   });

   test('Should disabled next button on last page', () => {
      renderWithRouter(<CustomPagination totalPages={5} />, ['/heroes?page=5']);

      const nextButton = screen.getByText('Siguiente');
      expect(nextButton.getAttributeNames()).toContain('disabled');
      // screen.debug(nextButton);
   });

   test('Should disabled button 3 when current page is 3', () => {
      renderWithRouter(<CustomPagination totalPages={5} />, ['/heroes?page=3']);

      const button3 = screen.getByText('3');
      const button2 = screen.getByText('2');
      // screen.debug(button3);
      expect(button2.getAttribute('variant')).toBe('outline');
      expect(button3.getAttribute('variant')).toBe('default');
   });

   test('Should change page when click on number button', () => {
      renderWithRouter(<CustomPagination totalPages={5} />, ['/heroes?page=3']);

      const button3 = screen.getByText('3');
      const button2 = screen.getByText('2');
      // screen.debug(button3);

      fireEvent.click(button2);

      expect(button2.getAttribute('variant')).toBe('default');
      expect(button3.getAttribute('variant')).toBe('outline');

   });
});