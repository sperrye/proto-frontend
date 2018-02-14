import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const EditLeftSidebar = () => {
  return (
    <div className=" edit-left-sidebar-container">

      <div className="m-1 card-filter">
        <h3>Filter cards by tags</h3>
        <p className="mtb-1">List of tags...</p>
        <div className="local-action">
          <i class="material-icons">close</i>
          <span>Clear Filters</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="m-1 card-actions">
        <div className="mtb-05 local-action">
          <i class="material-icons">check_box</i>
          <span>Select All</span>
        </div>
        <div className="mtb-05 local-action">
          <i class="material-icons">add</i>
          <span>Add Card</span>
        </div>
        <div className="mtb-05 local-action">
          <i class="material-icons">print</i>
          <span>Print Selected</span>
        </div>
        <div className="mtb-05 local-action">
          <i class="material-icons">delete</i>
          <span>Delete Selected</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="mtb-1 card-list">
        <div className="card-list-item">
          <i class="material-icons">content_copy</i>
          <span>Card Name</span>
        </div>
        <div className="card-list-item selected-list-item">
          <i class="material-icons">content_copy</i>
          <span>Card Name</span>
        </div>
        <div className="card-list-item">
          <i class="material-icons">content_copy</i>
          <span>Card Name</span>
        </div>
        <div className="card-list-item">
          <i class="material-icons">content_copy</i>
          <span>Card Name</span>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLeftSidebar)
