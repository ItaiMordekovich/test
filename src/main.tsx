import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './routes/router';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { SearchProvider } from './contexts/SearchContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
