import React from 'react'

const CsvFileImportExport = ({}) => (
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
)

export default CsvFileImportExport
