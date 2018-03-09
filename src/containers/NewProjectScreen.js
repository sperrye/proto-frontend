import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import NewProjectForm from '../components/modals/NewProjectForm';
import '../css/projects.css'

/* Example of projects screen with existing projects displayed as thumbnails */
const projects = [
  // {
  //   'name': 'Gnome Masters'
  // },
  // {
  //   'name': 'Epic Tokens Deck'
  // }
];

class ProjectsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  closeModal = () => {
    const modalAddProject = document.querySelector('.modal-add-project')
    modalAddProject.classList.add('hide')
  }
  openModal = () => {
    const modalAddProject = document.querySelector('.modal-add-project')
    modalAddProject.classList.remove('hide')
  }
  addProject = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <div className="projects-screen">
        <h1>PROJECTS</h1>
        <hr/>
        <div className="projects-thumbs">
          { projects.map((project, i) => {
            return (
              <div className="project-thumb-container">
                <div className="project-thumb" key={i}>
                  {project.name}
                </div>
              </div>
            )
          })}
          <div className="project-thumb-container">
            <div className="new-project-thumb" onClick={this.openModal}>
              +
            </div>
            Create New Project
          </div>

          <div className="white-overlay modal-add-project hide">
            <div className="new-project-form">
              <form>
                <label>1. Project Name</label>
                <input type="text" placeholder="New Project" name="project-name"/>
                <label>2. Import CSV or start from scratch</label>
                <p>Have data already?</p>
                <Link to='/assignfields'><input className="btn-import-csv" defaultValue="IMPORT CSV"/></Link>
                <sub>Learn more about importing</sub>
                <p>Or, start a new project with blank cards:</p>
                <input type="text" placeholder="Enter card quantity" name="blank-quantity"/>
                <label>3. Create!</label>
                <input className="btn-create-project" defaultValue="CREATE PROJECT" onClick={this.closeModal}/>
              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsScreen)
