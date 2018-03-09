import React, { Component } from 'react';
import '../../css/editview.css';
import '../../css/assignfields.css';

class Card extends Component {
  render() {
    return (
      <div>
      <div className='blue-outline'>
      <div className='outline'>
        <div className='grid'>
          <ul className='box-col left-col'>
            <li id='A' className='box'><button className='field-button'>a</button></li>
            <li id='m' className='box'><button className='field-button'>m</button></li>
            <li id='n' className='box'><button className='field-button'>n</button></li>
            <li id='o' className='box'><button className='field-button'>o</button></li>
          </ul>
          <ul>
            <li>
              <ul className='box-row top-row'>
                <li id='B' className='box'><button className='field-button'>b</button></li>
                <li id='C' className='box'><button className='field-button'>c</button></li>
                <li id='D' className='box'><button className='field-button'>d</button></li>
                <li id='E' className='box'><button className='field-button'>e</button></li>
              </ul>
            </li>
            <li>
              <ul className='text-col'>
                <li id='1'><input value='1' className='row-1 edit-card-input'/></li>
                <li id='art' className='art-space art-map'>Art</li>
              </ul>
            </li>
          </ul>
          <ul className='box-col right-col'>
            <li id='F' className='box'><button className='field-button'>f</button></li>
            <li id='p' className='box'><button className='field-button'>p</button></li>
            <li id='q' className='box'><button className='field-button'>q</button></li>
            <li id='r' className='box'><button className='field-button'>r</button></li>
          </ul>
        </div>
          <div className='grid center-grid'>
            <ul className='text-col-2'>
              <li id='2' className='row-2'><textarea placeholder='2'/></li>
              <li id='3' className='row-3'><textarea placeholder='3'/></li>
              <li id='4' className='row-4'><textarea placeholder='4'/></li>
            </ul>
          </div>
          <div className='grid'>
            <ul className='box-row bottom-row'>
              <li id='G' className='box'><button className='field-button'>g</button></li>
              <li id='H' className='box'><button className='field-button'>h</button></li>
              <li id='I' className='box'><button className='field-button'>i</button></li>
              <li id='J' className='box'><button className='field-button'>j</button></li>
              <li id='K' className='box'><button className='field-button'>k</button></li>
              <li id='L' className='box'><button className='field-button'>l</button></li>
            </ul>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Card
