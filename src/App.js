import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import EditCardsView from './containers/EditCardsView'
import NavBar from './components/shared/NavBar'
import AddCardModal from './components/modals/AddCardModal'
import DeleteCardsModal from './components/modals/DeleteCardsModal'

const App = () => (

  <Router>
    <div className="height100">

      <Route exact path='/' component={ props =>
        <div className="route-wrapper">

          <DeleteCardsModal />
          <AddCardModal />
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
