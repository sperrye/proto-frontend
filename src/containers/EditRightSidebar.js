import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const EditRightSidebar = () => {
  return (
    <div className="edit-right-sidebar-container">

      <div className="m-1 horizontal-input">
        <h3>Quantity</h3>
        <input type="text" name="quantity"></input>
      </div>

      <div className="m-1 horizontal-input">
        <h3>CSV Column</h3>
        <input type="text" name="csvColumn"></input>
      </div>

      <div className="m-1 csv-file">
        <h3>CSV File</h3>
        <input type="text" name="csvColumn"></input>
        <div className=" mtb-1 two-buttons">
          <button className="sm-btn" type="submit">
            <i class="material-icons">file_upload</i>
            Import
          </button>
          <button className="sm-btn" type="submit">
            <i class="material-icons">file_download</i>
            Export
          </button>
        </div>
      </div>

      <div className="m-1">
        <h3>Field Tags</h3>
        <div className="input-add">
          <input type="text" name="fieldTag" />
          <i class="material-icons">add_box</i>
        </div>
      </div>

      <div className="m-1">
        <h3>Text</h3>
        <input type="text" name="fieldText" />
      </div>

      <div className="m-1">
        <h3>Symbol</h3>
        <input type="text" name="fieldSymbol" />
      </div>

      <div>
        <div className="symbol-list-item">
          <i class="material-icons">favorite</i>
          <span>Heart</span>
        </div>
        <div className="symbol-list-item">
          <i class="material-icons">favorite</i>
          <span>Heart</span>
        </div>
        <div className="symbol-list-item selected-list-item">
          <i class="material-icons">favorite</i>
          <span>Heart</span>
        </div>
        <div className="symbol-list-item">
          <i class="material-icons">favorite</i>
          <span>Heart</span>
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
)(EditRightSidebar)
