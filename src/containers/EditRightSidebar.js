import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import CardQuantity from '../components/sidebars/CardQuantity'
import CsvColumn from '../components/sidebars/CsvColumn'
import CsvFileImportExport from '../components/sidebars/CsvFileImportExport'
import FieldTags from '../components/sidebars/FieldTags'
import FieldText from '../components/sidebars/FieldText'
import SymbolSearchSelect from '../components/sidebars/SymbolSearchSelect'
import SymbolList from '../components/sidebars/SymbolList'

const EditRightSidebar = () => {
  return (
    <div className="edit-right-sidebar-container">
      <CardQuantity />
      <CsvColumn />
      <CsvFileImportExport />
      <FieldTags />
      <FieldText />
      <SymbolSearchSelect />
      <SymbolList />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRightSidebar)
