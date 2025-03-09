import { DataLocation } from "./DataLocation";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import "./Location.css";

const Location = () => {
  return (
    <section className="mb-4 mb-lg-0">
       <h2 className="contact-subTitle mb-3">Location</h2>
       {
            DataLocation.map((contact)=>
            <div className="contact-border p-3 mb-3 mb-sm-5" key={contact.id}>
                <p className="contact-title text-start fs-6 mb-3">{contact.name}</p>
                <div className="pb-2">
                <i className="fs-5 label-color"><SlLocationPin /></i>
                <a href="https://maps.app.goo.gl/3jKd1kWxPfeaZ3Wc8" 
                target="_blank" 
                rel="noopener noreferrer" className="email text-decoration-none text-dark"><span className="ps-2 ms-2">No-1412, opp to-Petrol Pump,Madurai-Thondi Point Highway, Murthi Nagar,Kalayarkoil, Tamil Nadu - 630551</span></a>
                
                </div>
                <div className="pb-2">
                <i className="fs-5 label-color"><IoMailOpenOutline /></i>
                <a href={`mailto:${contact.emailId}`} className="email text-dark ps-2 ms-2 text-decoration-none ">{contact.emailId}</a>
                </div>
                <div className="pb-2">
                <i className="fs-5 label-color"><LuPhoneCall /></i>
                <a  href={`tel:${contact.mobileNumber1}`} className="email text-dark ps-2 ms-2 text-decoration-none ">{contact.mobileNumber1}</a>
                <a  href={`tel:${contact.mobileNumber2}`} className="email text-dark ps-2 ms-2 text-decoration-none ">{contact.mobileNumber2}</a>
                </div>
            </div>
            )
          }
    </section>
  )
}

export default Location
