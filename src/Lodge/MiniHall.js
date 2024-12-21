import React from 'react';

const MiniHall = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <p className='fw-bold sub-title fs-4'>M I N I H A L L</p>
      < div className='two-rooms card border border-none mx-3 '>
          <div className="hovereffect overflow-hidden">
            <img src="/images/Lodge/Mini-Hall.jpg" alt="No-Image" className="room-image img-responsive w-100"/>
          </div>
          <p className="room-header fw-bold fs-4 text-center py-3 mb-0">Mini Hall</p>
         
            <div  className='room-header d-flex justify-content-around align-items-center bg-room pb-3'>
                <div className='d-flex align-items-center'>
                    <img className='mini-img me-2' src='/images/Lodge/hall.png'/>
                    <p className='mb-0'>Hall Capacity</p>
                </div>
                <p className='mb-0'>100 Persons+</p>
            </div>
          <a  href={`tel:7639232333`} className='button-color text-white text-center text-decoration-none py-2 fw-bold'>Book Now</a>
      </div>
    </div>
  )
}

export default MiniHall;
