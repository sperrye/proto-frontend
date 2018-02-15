import React from 'react'

const SymbolList = () => (
  <div>
    <div className="m-1">
      <input type="text" name="searchSymbols" placeholder="Search symbols..." />
    </div>

    <div>
      <div className="symbol-list-item">
        <i className="material-icons">favorite</i>
        <span>Heart</span>
      </div>
      <div className="symbol-list-item">
        <i className="material-icons">favorite</i>
        <span>Heart</span>
      </div>
      <div className="symbol-list-item">
        <i className="material-icons">favorite</i>
        <span>Heart</span>
      </div>
      <div className="symbol-list-item">
        <i className="material-icons">favorite</i>
        <span>Heart</span>
      </div>
    </div>

  </div>
)

export default SymbolList
