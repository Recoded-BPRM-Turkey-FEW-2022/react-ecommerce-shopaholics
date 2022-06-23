import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from "react-query";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>

);
