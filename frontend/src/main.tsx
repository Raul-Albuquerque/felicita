import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { SearchBarProvider } from './contexts/SearchBarProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchBarProvider>
      <App />
    </SearchBarProvider>
  </StrictMode>,
)
