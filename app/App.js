import React from "react";
import AppLayout from './components/AppLayout'
import Router from './Router'
import { ThemeContextProvider } from './core/themeProvider';

const Routes = () => (
  <ThemeContextProvider>
      <AppLayout>
        <Router />
      </AppLayout>
  </ThemeContextProvider>
);

export default Routes;
