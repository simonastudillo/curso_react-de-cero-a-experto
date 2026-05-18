import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SearchControls } from "./SearchControls";
import { MemoryRouter } from "react-router";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (typeof window.ResizeObserver === 'undefined') {
   class ResizeObserver {
      observe() { }
      unobserve() { }
      disconnect() { }
   }
   window.ResizeObserver = ResizeObserver;
}

const queryClient = new QueryClient();

const renderWithRouter = (initialEntries: string[] = ['/']) => {
   return render(
      <MemoryRouter initialEntries={initialEntries}>
         <FavoriteHeroProvider>
            <QueryClientProvider client={queryClient}>
               <SearchControls />
            </QueryClientProvider>
         </FavoriteHeroProvider>
      </MemoryRouter>
   );
};

describe("SearchControls", () => {

   test('Should render SearchControls with default values', () => {
      const { container } = renderWithRouter();
      expect(container).toMatchSnapshot();
   });

   test('Should set input value when search param name is set', () => {
      renderWithRouter(['/?name=superman']);
      const input = screen.getByPlaceholderText('Search heroes, villains, powers, teams...') as HTMLInputElement;

      expect(input.value).toBe('superman');
   });

   test('Should change params when input value is changed and enter is pressed', () => {
      renderWithRouter(['/?name=superman']);
      const input = screen.getByPlaceholderText('Search heroes, villains, powers, teams...') as HTMLInputElement;
      expect(input.value).toBe('superman');
      fireEvent.change(input, { target: { value: 'batman' } });
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
      expect(input.value).toBe('batman');

   });

   test('Should change params strength when slider value is changed', () => {
      renderWithRouter(['/?active-accordion=advance-filters&name=superman&strength=5']);
      const slider = screen.getByRole('slider') as HTMLInputElement;
      expect(slider.getAttribute('aria-valuenow')).toBe('5');

      fireEvent.keyDown(slider, { key: 'ArrowRight', code: 'ArrowRight' });
      expect(slider.getAttribute('aria-valuenow')).toBe('6');
   });

   test('Should accordion be open when active-accordion param is set', () => {
      renderWithRouter(['/?active-accordion=advance-filters']);
      const accordion = screen.getByTestId('accordion');
      const accordionItem = accordion.querySelector('div');
      expect(accordionItem?.getAttribute('data-state')).toBe('open');
   });

   test('Should accordion be open when active-accordion param is set', () => {
      renderWithRouter(['/?name=superman']);
      const accordion = screen.getByTestId('accordion');
      const accordionItem = accordion.querySelector('div');
      expect(accordionItem?.getAttribute('data-state')).toBe('closed');
   });

});