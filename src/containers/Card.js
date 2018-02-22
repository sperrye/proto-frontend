import React, { Component } from 'react';
import '../css/editview.css';

class Card extends Component {
  render() {
    return (
      <div className='outline'>
        <div className='grid'>
          <ul className='box-col left-col'>
            <li id='A' className='box'><textarea placeholder='A'/></li>
            <li id='m' className='box'><textarea placeholder='m'/></li>
            <li id='n' className='box'><textarea placeholder='n'/></li>
            <li id='o' className='box'><textarea placeholder='o'/></li>
          </ul>
          <ul>
            <li>
              <ul className='box-row top-row'>
                <li id='B' className='box'><textarea placeholder='B'/></li>
                <li id='C' className='box'><textarea placeholder='C'/></li>
                <li id='D' className='box'><textarea placeholder='D'/></li>
                <li id='E' className='box'><textarea placeholder='E'/></li>
              </ul>
            </li>
            <li>
              <ul className='text-col'>
                <li id='1'><input placeholder='1' className='row-1'/></li>
                <li id='art' className='art-space'></li>
              </ul>
            </li>
          </ul>
          <ul className='box-col right-col'>
            <li id='F' className='box'><textarea placeholder='F'/></li>
            <li id='p' className='box'><textarea placeholder='p'/></li>
            <li id='q' className='box'><textarea placeholder='q'/></li>
            <li id='r' className='box'><textarea placeholder='r'/></li>
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
              <li id='G' className='box'><textarea placeholder='G'/></li>
              <li id='H' className='box'><textarea placeholder='H'/></li>
              <li id='I' className='box'><textarea placeholder='I'/></li>
              <li id='J' className='box'><textarea placeholder='J'/></li>
              <li id='K' className='box'><textarea placeholder='K'/></li>
              <li id='L' className='box'><textarea placeholder='L'/></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Card
