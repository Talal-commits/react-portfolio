import start from "./assets/start.png";

function TitleBar() {
    return (
        <div className="title-bar">
            <div className="content">
                <img src={start} />
                <p>Talal Munir | FrontEnd Developer</p>
            </div>
            <div className="buttons">
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
            </div>
        </div>
    );
}

export default TitleBar;