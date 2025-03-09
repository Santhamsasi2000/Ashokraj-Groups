import React from "react";
import "./ContactUs.css";
import Swal from 'sweetalert2';
import Location from "./Location/Location";
import ContactUsForm from "./ContactForm/ContactUsForm";
import Direction from "./Location/Direction";

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
    <section className="contact-bg p-3 p-sm-5">
       <p className='contact-title mb-3 mb-sm-5'>CONTACT US</p>
       <div className='row justify-content-between'>
         <div className="col-lg-5">
            <Location/>
         </div>
          <div className="col-lg-5">
             <Direction/>
             <ContactUsForm/>
          </div>
       </div>
    </section>
  )
}

export default ContactUs
