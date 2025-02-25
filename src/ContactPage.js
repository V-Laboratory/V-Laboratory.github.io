// ContactPage.js
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <p>
                We are a group of passionate people from various backgrounds to pursue cutting-edge research on visual computing. You can find our research focus in the recently published papers. 
                We are proud of having built a collaborative, friendly, and horizontal culture, aiming for high-quality research. 
                If you think you are a good fit for our team, feel free to reach out, visit, and talk to us!
            </p>
            <ul>
                <li>Email: epark@yonsei.ac.kr</li>
                <li>Phone: 1599-1885</li>
                <li>Address: 50 Yonsei-ro, Seodaemun-gu, Seoul, 03722, Republic of Korea</li>
            </ul>
            <div className="map-container">
                <iframe
                    title="Yonsei University V-Lab Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.2724654698009!2d126.93779818386135!3d37.565784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c988ea13e280f%3A0xb7b75243ec5a638e!2z7Jew7IS464yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1644474075580!5m2!1sko!2skr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactPage;