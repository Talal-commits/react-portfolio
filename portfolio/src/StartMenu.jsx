import { useState } from "react";
import shutdown from "./assets/shutdown.png";
import standby from "./assets/standby.png"
import restart from "./assets/restart.png"


function StartMenu(){
    return(
        <div className="start-menu">
            <div className="profile">
                <img src="https://i.pravatar.cc/50" alt="profile-pic" />
                <p>Talal Munir</p>
            </div>
            <div className="menu">
                <ul>
                    <li>Github</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Email</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            <div className="power-buttons">
                <button><img src={standby} alt="standby-button" /></button>
                <button><img src={shutdown} alt="shutdown-button" /></button>
                <button><img src={restart} alt="restart-button" /></button>
            </div>
        </div>
    );
}

export default StartMenu;