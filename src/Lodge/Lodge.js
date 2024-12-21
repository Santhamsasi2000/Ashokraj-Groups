import React from 'react';
import Rooms from '../Lodge/Rooms';
import HeaderLodge from '../Lodge/HeaderLodge';
import Services from '../Lodge/Services';
import "../Lodge/Lodge.css"
import MiniHall from '../Lodge/MiniHall';

const Lodge = () => {
  return (
     <section className='common-bg'>
       <HeaderLodge/>
       <Rooms/>
       <MiniHall/>
       <Services/> 
     </section>
  )
}

export default Lodge;
