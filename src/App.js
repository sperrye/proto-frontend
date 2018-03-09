import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'

import EditCardsView from './containers/EditCardsView'
import NavBar from './components/shared/NavBar'
import AddCardModal from './components/modals/AddCardModal'
import DeleteCardsModal from './components/modals/DeleteCardsModal'
import NewProjectScreen from './containers/NewProjectScreen';
import AssignFields from './components/newproject/AssignFields';

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
      <Route exact path='/newproject' component={ props =>
        <div className="route-wrapper">
          <NewProjectScreen />
        </div>
      }/>
      <Route exact path='/assignfields' component={ props =>
        <div className="route-wrapper">
          <AssignFields />
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
