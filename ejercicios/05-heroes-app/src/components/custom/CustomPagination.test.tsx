import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { CustomPagination } from "./CustomPagination";
import { MemoryRouter } from "react-router";
import type { PropsWithChildren } from "react";

const renderWithRouter = (component: React.ReactElement) => {
   return render(
      <MemoryRouter>
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

      screen.debug();
      expect(screen.getByText('Anterior')).toBeDefined();
      expect(screen.getByText('Siguiente')).toBeDefined();
      expect(screen.getByText('1')).toBeDefined();
      expect(screen.getByText('2')).toBeDefined();
      expect(screen.getByText('3')).toBeDefined();
      expect(screen.getByText('4')).toBeDefined();
      expect(screen.getByText('5')).toBeDefined();
   });
});