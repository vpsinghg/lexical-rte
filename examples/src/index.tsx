import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Counter } from 'lexical-custom-rte'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <div>
      <h2>Default counter</h2>
      <Counter />
    </div>
    <hr />
    <div>
      <h2>Counter with predefined value</h2>
      <Counter value={5} />
    </div>
  </StrictMode>,
)
