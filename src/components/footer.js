import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer () {
  return (
    <div>
        <div>
            <div>
                <div>
                    <img src='./images/logo.svg' alt='logoddsb' />
                    <p>Rental App is a marketplace where you can find variety of items that are up for rent, we are committed to giving you the best.</p>
                    <div></div>
                </div>
                <div>
                    <h4>Navigation</h4>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h4>Featured Locations</h4>
                    <p>Imo</p>
                    <p>Imo</p>
                    <p>Imo</p>
                    <p>Imo</p>
                </div>
                <div>
                    <h4>Help</h4>
                    <p>FAQ</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <FaLinkedinIn />
                    <FaYoutube />
                    <BsTwitterX />
                    <FaFacebookF />
                    <AiFillInstagram />                    
                </div>
            </div>
            <div>

            </div>
        </div>      
    </div>
  )
}

export default Footer 
