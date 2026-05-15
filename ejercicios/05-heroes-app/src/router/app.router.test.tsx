import { describe, expect, test, vi } from "vitest";
import { AppRouter } from './app.routes';
import { Outlet, RouterProvider } from "react-router";
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
   HeroPage: () => <h1 data-testid="hero-page">HeroPage</h1>
}));


describe('AppRouter', () => {

   test('should be configured as expected', () => {
      expect(AppRouter.routes).toMatchSnapshot();
   });

   test('Should render home page at root path', () => {
      render(<RouterProvider router={AppRouter} />);
      screen.debug();
      expect(screen.getByTestId('home-page')).toBeDefined();
   });

});