import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import EditCardsView from './containers/EditCardsView'
import NavBar from './components/shared/NavBar'
import AddCardModal from './components/modals/AddCardModal'
import ProjectsScreen from './containers/ProjectsScreen';

const App = () => (

  <Router>

      <Route exact path='/' component={ props =>
        <div className="route-wrapper">

          <AddCardModal />
          <NavBar />{/*
          <EditCardsView />*/}
          <ProjectsScreen/>

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
