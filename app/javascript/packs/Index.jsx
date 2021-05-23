import React from 'react'
import ReactDOM from 'react-dom'

import Routes from "../routes/Index";

// TODO: Add redux?
const App = props => (
  <>{Routes}</>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
