import { useState } from "react";
import shutdown from "./assets/shutdown.png";
import standby from "./assets/standby.png";
import restart from "./assets/restart.png";
import github from "./assets/github.png";
import gmail from "./assets/gmail.png";
import instagram from "./assets/instagram.png";
import phone from "./assets/phone.png";
import linkedin from "./assets/Linkedin.png";


function StartMenu({ onClose, onOpenContact }){
    return(
        <div className="start-menu">
            <div className="profile">
                <img src="https://i.pravatar.cc/50" alt="profile-pic" />
                <p>Talal Munir</p>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="https://github.com/Talal-commits" target="_blank"><img src={github} alt="github-icon" /><p>Github</p></a></li>
                    <hr />
                    <li><a href="https://www.linkedin.com/in/talal-munir-88b393380/" target="_blank"><img src={linkedin} alt="gmail-icon" /><p>LinkedIn</p></a></li>
                    <hr />
                    <li><a href="https://www.instagram.com/itx_talaaal" target="_blank"><img src={instagram} alt="instagram-icon" /><p>Instagram</p></a></li>
                    <hr />
                    <li><a href="" target="_blank"><img src={gmail} alt="phone-icon" /><p>Email</p></a></li>
                    <hr />
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenContact(); onClose(); }}><img src={phone} alt="phone-icon" /><p>Contact Me</p></a></li>
                </ul>
            </div>
            <div className="power-buttons">
                <span><img src={standby} alt="standby-button" /><p>Log Off</p></span>
                <span><img src={shutdown} alt="shutdown-button" /><p>Turn Off</p></span>
            </div>
        </div>
    );
}

export default StartMenu;