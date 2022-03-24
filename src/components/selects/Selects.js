import React from 'react';
import './SelectsStyles.css';

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Keywest from '../../assets/keywest.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Maldives3 from '../../assets/maldives3.jpg';

import SelectImg from '../SelectsImg/SelectImg';

function selects() {
  return (
    <div name="views" className='selects'>
      <div className='container'>
      <SelectImg bgImg={BoraBora} text={'Bora bora'}/>
      <SelectImg bgImg={BoraBora2} text={'Emerald Bay'}/>
      <SelectImg bgImg={Keywest} text={'key west'}/>
      <SelectImg bgImg={Maldives} text={'Maldives'}/>
      <SelectImg bgImg={Maldives2} text={'Maldives2'}/>
      <SelectImg bgImg={Maldives3} text={'Maldives3'}/>
      </div>
     
    </div>
  )
}

export default selects