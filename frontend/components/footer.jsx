import React from "react";

const Footer = () => (
    <div className="footer-box">
        <ul className="footser-link">
            <a href="mailto:johnson9710@gmail.com" className="conntact-info">Email</a>
            <img src={emailImage} className='footer-icon'/>
            <a href="https://github.com/KCSJW" className="conntact-info" target="_blank">GitHub</a>
            <img src={githubImage} className='footer-icon' />
            <a href="https://www.linkedin.com/in/chong-shun-wai-0640271a1/" className="conntact-info" target="_blank">LinkIn</a>
            <img src={linkinImage} className='footer-icon' />
        </ul>
        <p className="footer-disclaimer">
            Disclaimer: This is a personal project, 
            reviews do not represent creator's opinion 
            and creator do not own any actworks used in this project.
        </p>
        <img src={nqImage} className='footer-icon-end'/>
    </div>
);

export default Footer;