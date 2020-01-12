import React from "react";

const Footer = () => (
    <div className="footer-box">
        <ul className="footser-link">
            <a href="mailto:johnson9710@gmail.com" className="conntact-info">Conntact</a>
            <img src={emailImage} className='footer-icon'/>
            <a href="https://github.com/KCSJW" className="conntact-info" target="_blank">GitHub</a>
            <img src={githubImage} className='footer-icon' />
        </ul>
    </div>
);

export default Footer;