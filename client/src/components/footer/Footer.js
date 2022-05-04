import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <>
            <div className="footer-sec">
            <div className="footer-sec-cont">
                <div className="footer-data-sec">
                    <div className="data-cont">
                        <div className="data-cont-head">amayra's shop</div>
                        <span>About Us</span>
                        <span>Browse Products</span>
                        <span>Contact US</span>
                        <span>FAQs</span>
                    </div>
                    <div className="data-cont">
                        <div className="data-cont-head">collections</div>
                        <span>Summer 2022</span>
                        <span>Women's Collection</span>
                        <span>Men's Jackets</span>
                        <span>Shoes</span>
                    </div>
                    <div className="data-cont">
                        <div className="data-cont-head">customer care</div>
                        <span>Order Tracking</span>
                        <span>Privacy Policy</span>
                        <span>Payments And Reaturns</span>
                        <span>FAQs</span>
                    </div>
                </div>
                <div className="footer-news-letter">
                <div className="data-cont-head">new's letter</div>
                <span>Get instant updates about our new products and special</span>
                <span>promos!</span>
                <div className="news-letter-input-box">
                    <input type="text" placeholder='your email address' />
                    <button>susbcribe</button>
                </div>
                <div className="payments-sec"><img src="/images/payment.png" alt="payment" /></div>
                
                </div>
                </div>
            <div className="footer-social-links">
                <div className="footer-links-cont">
                    <img src="/images/social/twitter.png" alt="twitter" />
                    <img src="/images/social/facebook.png" alt="facebook" />
                    <img src="/images/social/pinterest.png" alt="pintrest" />
                </div>
            </div>
            <div className="footer-copyright">
            © 2022 -Amayra's Shop : Made from passion for fashion in
            <img src="https://images.ctfassets.net/0nm5vlv2ad7a/6naVcO5MsOWXuYiol4l43R/9170af8985a9af2f9218cb02806eecbc/benefits-of-react.png" alt="" />
            </div>
            </div>
        </>
    )
}

export default Footer