function SideBar() {
    return (
        <div>
            <div className="side-bar">
                <div className="project-list">
                    <h3>Project Categories </h3>
                    <ul>
                        <li>Frontend</li>
                        <li>backend</li>
                        <li>UI/UX</li>
                    </ul>
                </div>
                <div className="project-list">
                    <h3>Recent Projects</h3>
                </div>
            </div>
        </div>
    );
}

export default SideBar;