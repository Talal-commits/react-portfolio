function SideBar() {
    return (
        <div className="side-bar">
            <div className="project-list">
                <h3>Project Categories <span className="chevron">^</span></h3>
                <ul>
                    <li>Frontend</li>
                    <li>Backend</li>
                    <li>Designs</li>
                </ul>
            </div>
            <div className="project-list">
                <h3>Recent Works <span className="chevron">v</span></h3>
            </div>
        </div>
    );
}

export default SideBar;