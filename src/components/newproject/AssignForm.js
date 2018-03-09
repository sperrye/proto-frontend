import React, { Component } from 'react';
import '../../css/assignfields.css';

const AssignForm = ({fieldData}) => {
  return (
    <div className='field-row'>
    <select>
       {fieldData.map((cardInfo) => {
         return (
            <option>{cardInfo.title}</option>
         )
     })}
   </select>
   ->
      <select>
        <option value='A'>A</option> word
        <option value='B'>B</option>
        <option value='C'>C</option>
        <option value='D'>D</option>
        <option value='E'>E</option>
        <option value='F'>F</option>
        <option value='G'>G</option>
        <option value='H'>H</option>
        <option value='I'>I</option>
        <option value='J'>J</option>
        <option value='K'>K</option>
        <option value='L'>L</option>
      </select>
    </div>
  )
}
export default AssignForm;
