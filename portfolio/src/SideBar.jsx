function SideBar({title, categories=[]}) {
    return (
        <div className="side-bar">
            <div className="project-list">
                <h3>{title} <span className="chevron">^</span></h3>
                <ul>
                    {categories.map((category) => (
                        <li key={category}>{category}</li>
                    ))}
                </ul>
            </div>
            <div className="project-list">
                <h3>Recent Works <span className="chevron">v</span></h3>
            </div>
        </div>
    );
}

export default SideBar;