import React from 'react'
import ReactDOM from 'react-dom'

import Routes from "../routes/Index";

const App = props => (
  <>{Routes}</>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
