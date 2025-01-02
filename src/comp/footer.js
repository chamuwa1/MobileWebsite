import React from 'react'
import './footer.css'
import { FaPiggyBank , FaShippingFast , FaHeadphones , FaWallet} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left_box'>
                <div className='box'>
                    <div className='icon_box'>
                         <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p> Make You Save More Money</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Free Delivery</h3>
                        <p>Get Your Product Fast</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphones />
                    </div>
                    <div className='detail'>
                        <h3>24/7 Support</h3>
                        <p>Help You With Your Problem</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>Money Back</h3>
                        <p>Get Your Money Back </p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <img src='images/ne.png' alt=''></img>
                    <p>Welcome To Our Shop. We will provide you with best products in the current market.</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Order</li>
                            <li>New Product</li>
                            <li>Old Product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Kurunegala, Shopping Center</li>
                            <li>+94741234567</li>
                            <li>mobicare@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Footer