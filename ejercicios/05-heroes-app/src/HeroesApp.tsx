import { RouterProvider } from "react-router/dom";
import { AppRouter } from "./router/app.routes";
import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const HeroesApp = () => {
   return (
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={AppRouter} />
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   )
}
