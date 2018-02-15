import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import EditCardsView from './containers/EditCardsView'
import NavBar from './components/shared/NavBar'

const App = () => (

  <Router>

      <Route exact path='/' component={ props =>
        <div className="route-wrapper">
          <NavBar />
          <EditCardsView />
        </div>
      }/>

  </Router>

)

const mapStateToProps = state => ({})

const mapDispatchToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
