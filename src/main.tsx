import { Root } from './Root'
import './styles/styles.scss'

import * as React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)