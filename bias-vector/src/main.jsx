import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Database from './Database.jsx'
import About from './About.jsx'
import Team from './Team.jsx'
import References from './References.jsx'
import Feedback from './Feedback.jsx'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

import './index.css'
import './App.css'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const pathname = window.location.pathname

let componentToRender


if (pathname === '/about.html') {
  componentToRender = <About />
} else if (pathname === '/database.html') {
  componentToRender = <Database />
}
else if (pathname === '/team.html') {
  componentToRender = <Team />
}
else if (pathname === '/references.html') {
  componentToRender = <References />
}
else if (pathname === '/feedback.html') {
  componentToRender = <Feedback />
}
else {
  componentToRender = <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {componentToRender}
  </React.StrictMode>,
)
