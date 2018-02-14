import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import EditCardsView from './containers/EditCardsView'
import NavBar from './components/shared/NavBar'

const App = () => (

  <Router>
    <div>
      <Route exact path='/' component={ props =>
        <div>
          <NavBar />
          <EditCardsView />
        </div>
      }/>
    </div>
  </Router>

)

const mapStateToProps = state => ({})

const mapDispatchToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
