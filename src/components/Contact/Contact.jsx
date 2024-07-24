import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1613edfa-fb33-47bb-8c75-56cdd194c999");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Send us a Message
                    <img src={msg_icon} alt="Message Icon" />
                </h3>
                <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our school community.</p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="Mail Icon" />
                        info@springdale.edu
                    </li>
                    <li>
                        <img src={phone_icon} alt="Phone Icon" />
                        +1 (123) 456-7890
                    </li>
                    <li>
                        <img src={location_icon} alt="Location Icon" />
                        Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
                    </li>
                </ul>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.96305761531683!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577699e7a0f0c8!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1632204720736!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                ></iframe>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Enter Your Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" required />
                    <label htmlFor="email">Enter Your Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" required />
                    <label htmlFor="message">Write Your Message Here</label>
                    <textarea name="message" id="message" rows={6} placeholder="Enter Your Message Here...." required></textarea>
                    <button className="btn dark-btn" type="submit">
                        Submit Now
                        <img src={white_arrow} alt="White Arrow" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
