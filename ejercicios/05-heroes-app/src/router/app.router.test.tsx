import { describe, expect, test, vi } from "vitest";
import { AppRouter } from './app.routes';
import { createMemoryRouter, Outlet, RouterProvider, useParams } from "react-router";
import { render, screen } from "@testing-library/react";

vi.mock('@/heroes/layouts/HeroesLayout', () => ({
   HeroesLayout: () => <div data-testid="heroes-layout">
      <Outlet />
   </div>
}));
vi.mock('@/heroes/pages/home/HomePage', () => ({
   HomePage: () => <h1 data-testid="home-page">HomePage</h1>
}));
vi.mock('@/heroes/pages/hero/HeroPage', () => ({
   HeroPage: () => {
      const {idSlug = '' } = useParams();
      return (<div data-testid="hero-page">
         HeroPage - {idSlug}
      </div>)
   }
}));

vi.mock('@/heroes/pages/search/SearchPage', () => ({
   default: () => <div data-testid="search-page">search-page</div>
}));


describe('AppRouter', () => {

   test('should be configured as expected', () => {
      expect(AppRouter.routes).toMatchSnapshot();
   });

   test('Should render home page at root path', () => {
      const router = createMemoryRouter(AppRouter.routes, {
         initialEntries: ['/']
      });

      render(<RouterProvider router={router} />);
      // screen.debug();
      expect(screen.getByTestId('home-page')).toBeDefined();
   });

   test('Should render hero page at /heroes/:idSlug path', () => {
      const router = createMemoryRouter(AppRouter.routes, {
         initialEntries: ['/heroes/superman']
      });

      render(<RouterProvider router={router} />);
      // screen.debug();
      expect(screen.getByTestId('hero-page')).toBeDefined();
      expect(screen.getByTestId('hero-page').innerHTML).toContain('superman');
   });

   test('Should render search page at /search path', async () => {
      const router = createMemoryRouter(AppRouter.routes, {
         initialEntries: ['/search']
      });
      render(<RouterProvider router={router} />);
      expect(await screen.findByTestId('search-page')).toBeDefined();
   });

});