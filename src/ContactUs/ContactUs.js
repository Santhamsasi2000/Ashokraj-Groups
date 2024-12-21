import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { ContactData } from './ContactData';
import "./ContactUs.css";
import Swal from 'sweetalert2';
import { ContactRestaurant } from "./ContactRestaurant";

const ContactUs = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8b1b8d98-b9ab-4031-ad0c-05a23978adf8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Message Send!",
            text: "We will get back to you as soon as possible",
            icon: "success"
          });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <>
       <section className='contact my-5 d-flex flex-column  align-items-center align-items-lg-start flex-lg-row gap-5'>
          <div className='d-flex flex-column'>
        {
            ContactData.map((contact)=>
              <div className="contact-bg p-3 rounded-3 mx-2 mx-sm-5 my-5 shadow border border-2 border-color" key={contact.id}>
            <p className="fw-semibold fs-4 title-address">{contact.name}</p>
            <div className="pb-2">
              <i className="fs-5 label-color"><SlLocationPin /></i>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location)}`} 
            target="_blank" 
            rel="noopener noreferrer" className="email text-decoration-none text-secondary"><span className="ps-2 ms-2">No-1412, opp to-Petrol Pump,Madurai-Thondi Point Highway, Murthi Nagar,Kalayarkoil, Tamil Nadu - 630551</span></a>
              
            </div>
            <div className="pb-2">
              <i className="fs-5 label-color"><IoMailOpenOutline /></i>
              <a href={`mailto:${contact.emailId}`} className="email text-secondary ps-2 ms-2 text-decoration-none ">{contact.emailId}</a>
            </div>
            <div className="pb-2">
              <i className="fs-5 label-color"><LuPhoneCall /></i>
              <a  href={`tel:${contact.mobileNumber1}`} className="email text-secondary ps-2 ms-2 text-decoration-none ">{contact.mobileNumber1}</a>
              <a  href={`tel:${contact.mobileNumber2}`} className="email text-secondary ps-2 ms-2 text-decoration-none ">{contact.mobileNumber2}</a>
            </div>
              </div>
            )
        }
          </div>
          <div className="d-flex flex-column  align-items-center align-items-lg-start">
          {
            ContactRestaurant.map((contact)=>
              <div className="contact-bg p-3 rounded-3 mx-2 mx-sm-5 my-5 shadow border border-2 border-color" key={contact.id}>
            <p className="fw-semibold fs-4 title-address">{contact.name}</p>
            <div className="pb-2">
              <i className="fs-5 label-color"><SlLocationPin /></i>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location)}`} 
            target="_blank" 
            rel="noopener noreferrer" className="email text-decoration-none text-secondary"><span className="ps-2 ms-2">No-1412, opp to-Petrol Pump,Madurai-Thondi Point Highway, Murthi Nagar,Kalayarkoil, Tamil Nadu - 630551</span></a>
              
            </div>
            <div className="pb-2">
              <i className="fs-5 label-color"><IoMailOpenOutline /></i>
              <a href={`mailto:${contact.emailId}`} className="email text-secondary ps-2 ms-2 text-decoration-none ">{contact.emailId}</a>
            </div>
            <div className="pb-2">
              <i className="fs-5 label-color"><LuPhoneCall /></i>
              <a  href={`tel:${contact.mobileNumber1}`} className="email text-secondary ps-2 ms-2 text-decoration-none ">{contact.mobileNumber1}</a>
              <a  href={`tel:${contact.mobileNumber2}`} className="email text-secondary ps-2 ms-2 text-decoration-none ">{contact.mobileNumber2}</a>
            </div>
              </div>
            )
          }
          <form onSubmit={onSubmit} className='w-100 px-3 px-sm-5 py-3'>
          <p className='text-uppercase fs-3 fw-bold contact-title mb-1'>Get In Touch</p>
          <p className='fw-bold fs-6 mb-5 text-secondary'>To share your experience, queries, or concerns kindly submit the form below</p>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Full Name</label>
                <input type='text' name="Name of the Customer" className='field mt-2 rounded border border-1 ps-3' placeholder='Your Name *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Email Address</label>
                <input type='email' name='Email of the Customer' className='field mt-2 rounded border border-1 ps-3' placeholder='Your Email *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Mobile Number</label>
                <input type='text' name='Mobile Number of the Customer' className='field mt-2 rounded border border-1 ps-3' placeholder='Your Mobile Number *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='mb-2 label-color fw-bold'>Which Domain Choosing ?</label>
                <select class="form-select" aria-label="Default select example" style={{height:"50px"}} name='Domain'>
                    <option selected>Choose One</option>
                    <option value="Restaurant (Veg)">Veg Restaurant</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Lodge & Mini Hall">Lodge</option>
                </select>
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Your Message</label>
                <textarea name="Message of the Customer" className='field mess mt-2 rounded border border-1 ps-3 pt-3' placeholder='Your Message *' required />
            </div>
            <button type='submit' className='send-btn border-0 text-white rounded-2 fw-bold px-5 py-2'>SEND</button>
          </form>
          </div>
       </section>
    </>
  )
}

export default ContactUs
