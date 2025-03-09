import React from 'react';
import { Ri24HoursFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdRestaurant } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";

const Services = () => {
  return (
    <div className="py-5">
      <p className='sub-title fw-bold fs-4 mb-4 text-center'>O U R &nbsp; S E R V I C E S</p>
      <div className='d-flex flex-column align-items-center'>
        <div className='d-flex flex-column flex-sm-row gap-sm-5'>
          <div>
            <div className="d-flex gap-3 mb-4 align-items-center">
                <i className="icon-1 fs-3 border rounded-circle px-2 py-2  d-flex justify-content-center align-items-center"><MdOutlineSecurity /></i>
                <p className="mb-0">High Class Security</p>
            </div>
            <div className="d-flex gap-3 mb-4 align-items-center">
                <i className="icon-2 fs-3 border rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"><Ri24HoursFill /></i>
                <p className="mb-0">24 Hours Room Service</p>
            </div>
            <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="icon-3 fs-3 border rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"><IoMdRestaurant /></i>
            <p className="mb-0">Restaurant</p>
            </div>
          </div>
          <div>
          <div className="d-flex gap-3 mb-4 align-items-center">
              <i className="icon-1 fs-3 border rounded-circle px-2 py-2  d-flex justify-content-center align-items-center"><FaTv /></i>
              <p className="mb-0">Cable TV</p>
          </div>
          <div className="d-flex gap-3 mb-4 align-items-center">
              <i className="icon-2 fs-3 border rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"><TbAirConditioning /></i>
              <p className="mb-0">A/C and Non A/C </p>
          </div>
          <div className="d-flex gap-3 align-items-center">
              <i className="fs-3 border rounded-circle px-2 py-2 d-flex justify-content-center align-items-center icon-4"><FaCar /></i>
              <p className="mb-0">10+ Car Parking</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;