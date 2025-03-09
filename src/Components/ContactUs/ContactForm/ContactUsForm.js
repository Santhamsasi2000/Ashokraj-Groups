import React, { lazy, Suspense } from "react";
import { Formik, Form } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import FormField from "./FormField";
import StandardDropdown from "./StandardDropdown";

const Swal = lazy(() => import("sweetalert2"));

const ContactUsForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", "ccaaf5a8-be4b-4153-9e96-68946dde9f5a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        const { default: Swal } = await import("sweetalert2");
        Swal.fire({
          title: "MESSAGE SENT !",
          text: "Thanks for contacting us. You will receive a response within two hours. If you do not receive a response from us, please call '9043246176'.",
          icon: "success",
        });
        resetForm();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      const { default: Swal } = await import("sweetalert2");
      Swal.fire({
        title: "Error",
        text: error.message || "Network error. Please try again.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const serviceOptions = [
    "Veg Restaurant", "Restaurant", "Bakery", "Lodge", "Mini Hall",
  ];

  return (
    <section className="d-flex">
      <Formik
        initialValues={{
          studentName: "",
          studentStandard: "",
          email: "",
          mobileNumber: "",
          subject: "",
          message: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-100">
            <p className="contact-subTitle mb-2">GET IN TOUCH</p>
            <p className="mb-3">
            Feel free to use the below form to share your experience, questions, concerns, or Admission Enquiry.
            </p>

            <FormField name="studentName" label="Customer's Name" placeholder="Enter Your Name*" />
            <StandardDropdown options={serviceOptions} name="studentStandard" />
            <FormField name="email" label="Email Address (Optional)" type="email" placeholder="Enter Your Email Id" />
            <FormField name="mobileNumber" label="Mobile Number" placeholder="Enter Your Mobile Number*" />
            <FormField name="subject" label="Subject" placeholder="Enter the Subject*" />
            <FormField name="message" label="Message (Optional)" as="textarea" placeholder="Your Message" style={{height:"200px",padding:"10px"}}/>

            <button
              type="submit"
              className="send-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactUsForm;
