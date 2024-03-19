import React from 'react';
import '../../assets/css/Footer.css';
import { CDBIcon, CDBContainer } from 'cdbreact';
export default function Footer() {
  return (
    <>
    <footer class="footer-distributed">
    
                <div class="footer-left">
    
                    <h3>BoatHouse Voyagers<span></span></h3>
    
                    <p class="footer-links">
                        <a href="/" class="link-1">Home</a>
                        <a href="/user/about">About</a>
                        <a href="/user/contact">Contact</a>
                        <a href="/user/privacy">Privacy</a>
                    </p>
                    <p class="footer-company-name"> Boat House Booking © 2024</p>
                </div>
    
                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>w33</span> Kovaipudhur, Coimbatore</p>
                    </div>
    
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+91 9345426324</p>
                    </div>
    
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@boathouseVoyagers.com</a></p>
                    </div>
    
                </div>
    
                <div class="footer-right">
    
                    <p class="footer-company-about">
                        <span>About the company</span>
                        BoatHouse Voyager - Online Boat House Booking" offers a seamless platform for booking boat houses at 
                        your convenience. With user-friendly interfaces and secure payment gateways,
                         BoatHouse-Voyager ensures a hassle-free booking experience.
                    </p>
    
                    <div class="footer-icons" style={{color:'white'}}>
    
                    <CDBContainer>
   
          
      <CDBIcon fab spin icon="facebook" />
   
      <CDBIcon fab spin icon="twitter" />
      <CDBIcon fab spin icon="instagram" />
      <CDBIcon fab spin icon="google" />
    </CDBContainer>
    
                    </div>
    
                </div>
    
            </footer>
            </>
  );
}

