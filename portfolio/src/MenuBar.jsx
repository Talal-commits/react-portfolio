import start from "./assets/start.png";

function MenuBar() {
    return (
        <div className="menu-bar">
            <ul>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Favourites</li>
                <li>Help</li>
            </ul>
            <img src={start} />
        </div>
    );
}

export default MenuBar;