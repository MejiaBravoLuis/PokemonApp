import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {PokemonApp} from './components/PokemonApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonApp/>
  </StrictMode>,
)
