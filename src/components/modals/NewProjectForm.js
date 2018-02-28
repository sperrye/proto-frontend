import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../../css/projects.css';

class NewProjectForm extends Component {
  closeModal(e) {
    e.preventDefault();
    if (this.props.onClose) this.props.onClose();
  }
  render() {
    if (!this.props.isOpen) return null;
    return (
      <div className="white-overlay" onClick={e => this.closeModal(e)}>
        <div className="new-project-form">
          <form>
            <label>1. Project Name</label>
            <input placeholder="New Project"/>
            <label>2. Import CSV or start from scratch</label>
            <p>Have data already?</p>
            <input className="btn-import-csv" value="IMPORT CSV"/>
            <sub>Learn more about importing</sub>
            <p>Or, start a new project with blank cards:</p>
            <input placeholder="Enter card quantity"/>
            <label>3. Create!</label>
            <input className="btn-create-project" value="CREATE PROJECT"/>
          </form>
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
)(NewProjectForm)
