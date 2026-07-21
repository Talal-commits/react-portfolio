import start from "./assets/start.png";

function TitleBar() {
    return (
        <div className="title-bar">
            <div className="content">
                <img src={start} alt="icon" />
                <p>Talal Munir | FrontEnd Developer</p>
            </div>
            <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
    );
}

export default TitleBar;