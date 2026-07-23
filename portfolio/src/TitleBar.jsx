import start from "./assets/start.png";

function TitleBar({title, onClose }) {
    return (
        <div className="title-bar">
            <div className="content">
                <img src={start} alt="icon" />
                <p>{title}</p>
            </div>
            <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default TitleBar;