import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './css/navigation.css'
import './css/editview.css'
import './css/printpreview.css'
import './css/modal.css'

import store from './store'
import { Provider } from 'react-redux'
import { getProjectCards } from './actions'

//here for now; should use project id and load upon opening project
store.dispatch(getProjectCards())

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
