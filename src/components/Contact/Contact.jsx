import NavBar from "../NavBar/NavBar";
import ContactForm from "./ContactForm/ContactForm";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact">
        <h1 className="text-center text-warning text-uppercase">contact me</h1>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
