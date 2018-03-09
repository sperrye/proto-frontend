import React, { Component } from 'react';
import '../../css/assignfields.css';

import Card from './Card';
import AssignForm from './AssignForm';

const data = [
  { title: 'Name' },
  { title: 'HP' },
  { title: 'Attack' },
  { title: 'Rules' },
  { title: 'Type' },
  { title: 'Flavor text' },
  { title: 'Description' },
  { title: 'Artwork' },
  { title: 'Cost' },
  { title: 'Weaknesses' },
  { title: 'Strengths' },
];

class AssignFields extends Component {
  render () {
    return (
      <div className='assign-fields-container'>
        <h1>Assign Columns To Fields</h1>
        <hr/>
        <div className='assign-fields-row'>
          <Card/>
          <div className='assign-fields'>
            <div className='selections'>
              Choose a CSV column (left dropdowns), then link it to a field in the card layout (right drowndowns).
              <br/><sub>How your CSV was processed</sub>
              {data.map((card) => {
                return (
                  <AssignForm fieldData={data}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AssignFields;
