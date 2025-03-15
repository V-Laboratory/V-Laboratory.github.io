import React, { useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_CLIENT_ID}&language=en`;
        script.async = true;
        script.onload = () => {
            const mapOptions = {
                center: new window.naver.maps.LatLng(37.5608403, 126.9354738),
                zoom: 17,
            };
            const map = new window.naver.maps.Map("map", mapOptions);
            new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(37.5608403, 126.9354738),
                map,
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div className="contact-page">
            <p>
                We are a group of passionate people from various backgrounds to pursue cutting-edge research on visual computing. You can find our research focus in the recently published papers. 
                We are proud of having built a collaborative, friendly, and horizontal culture, aiming for high-quality research. 
                If you think you are a good fit for our team, feel free to reach out, visit, and talk to us!
            </p>
            <ul>
                <li>Email: epark@yonsei.ac.kr</li>
                <li>Phone: 02-2123-5761</li>
                <li>Address: 50 Yonsei-ro, Seodaemun-gu, Seoul, 03722, Republic of Korea</li>
            </ul>
            <div className="map-container">
                <div id="map" style={{ width: '100%', height: '400px' }}></div>
            </div>
        </div>
    );
};

export default ContactPage;
