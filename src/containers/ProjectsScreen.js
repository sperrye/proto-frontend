import React, { Component } from 'react'
import { connect } from 'react-redux';
import NewProjectForm from '../components/modals/NewProjectForm';
import '../css/projects.css'

/* Example of projects screen with existing projects displayed as thumbnails */
const projects = [
/*  {
    'name': 'Gnome Masters'
  },
  {
    'name': 'Epic Tokens Deck'
  } */
];

class ProjectsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
  }
  openModal() {
    this.setState({ modalOpen: true })
  }
  closeModal() {
    this.setState({ modalOpen: false })
  }
  render() {
    return (
      <div className="projects-screen">
        <h1>PROJECTS</h1>
        <hr/>
        <NewProjectForm isOpen={this.state.modalOpen} onClose={() => this.closeModal()}/>
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
            <div className="new-project-thumb" onClick={() => this.openModal()}>
              +
            </div>
            Create New Project
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
