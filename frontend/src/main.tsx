import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import UsersCtx from './context/users.context.tsx'
import TodosCtx from './context/todos.context.tsx'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UsersCtx>
        <TodosCtx>
          <App />
        </TodosCtx>
      </UsersCtx>
    </BrowserRouter>
  </StrictMode>,
)
