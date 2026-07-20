import { useState, useEffect } from "react";
import startImage from "./assets/start.png"
import speaker from "./assets/speaker.png"
import flag from "./assets/flag.png"

function Taskbar(){
    const [date, setDate] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return(
        <div className="taskbar">
            <div className="start-button">
                <img src={startImage} />
                <h2>Start</h2>
            </div>
            <div className="tab-section">
                <div className="single-tab">
                    <p>Talal Munir | Web Developer</p>
                </div>
            </div>
            <div className="icon-tray">
                <img src={speaker} />
                <img src={flag} />
                <p>{date}</p>
            </div>
        </div>
    );
}

export default Taskbar;