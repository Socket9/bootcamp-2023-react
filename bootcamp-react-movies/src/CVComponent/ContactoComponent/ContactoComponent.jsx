import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import "./ContactoComponent.css";

const ContactoComponent = ({ phone, email, linkedin }) => {
    return (
        <section className="contact-container">
            <h2 className="title">CONTACTO</h2>
            <div className="contact-list">
                <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <span>{phone}</span>
                </div>
                <div className="contact-item">
                    <MdOutlineMail className="contact-icon" />
                    <span>{email}</span>
                </div>
                <div className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <span>{linkedin}</span>
                </div>
            </div>
        </section>
    );
};

export default ContactoComponent;
