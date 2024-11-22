import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Pokemone } from './Pokemon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Pokemone/>
  </StrictMode>,
)
