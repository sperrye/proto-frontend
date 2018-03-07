import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const PrintPreview = ({}) => {

  return (
    <div className="print-preview">

      <Link to="/print">
        <button
          className="txt-center print-button">
          Print Preview
        </button>
      </Link>

      <div className="print-preview-page" id="printarea">
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
      </div>

      <div className="print-preview-page" id="printarea">
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
        <div className="card-row">
          <div className="card-preview"></div>
          <div className="card-preview"></div>
          <div className="card-preview"></div>
        </div>
      </div>

    </div>
  )
}

export default PrintPreview
