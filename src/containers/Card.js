import React, { Component } from 'react';
import '../css/editview.css';

class Card extends Component {
  render() {
    return (
      <div className='outline'>
        <div className='grid'>
          <ul className='box-col left-col'>
            <li id='A' className='box'>A</li>
            <li id='m' className='box'>m</li>
            <li id='n' className='box'>n</li>
            <li id='o' className='box'>o</li>
          </ul>
          <ul>
            <li>
              <ul className='box-row top-row'>
                <li id='B' className='box'>B</li>
                <li id='C' className='box'>C</li>
                <li id='D' className='box'>D</li>
                <li id='E' className='box'>E</li>
              </ul>
            </li>
            <li>
              <ul className='text-col'>
                <li id='1' className='row-1'>1</li>
                <li id='art' className='art-space'></li>
              </ul>
            </li>
          </ul>
          <ul className='box-col right-col'>
            <li id='F' className='box'>F</li>
            <li id='p' className='box'>p</li>
            <li id='q' className='box'>q</li>
            <li id='r' className='box'>r</li>
          </ul>
        </div>
          <div className='grid center-grid'>
            <ul className='text-col-2'>
              <li id='2' className='row-2'>2</li>
              <li id='3' className='row-3'>3</li>
              <li id='4' className='row-4'>4</li>
            </ul>
          </div>
          <div className='grid'>
            <ul className='box-row bottom-row'>
              <li id='G' className='box'>G</li>
              <li id='H' className='box'>H</li>
              <li id='I' className='box'>I</li>
              <li id='J' className='box'>J</li>
              <li id='K' className='box'>K</li>
              <li id='L' className='box'>L</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Card
