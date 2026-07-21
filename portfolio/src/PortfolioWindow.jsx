import start from "./assets/start.png";
import TitleBar from "./TitleBar";
import MenuBar from "./MenuBar";
import SideBar from "./SideBar";
import ProjectGrid from "./ProjectGrid";

function PortfolioWindow(){
    return(
        <div className="window">
            <TitleBar />
            <MenuBar />
            <div className="window-content">
                <SideBar />
                <ProjectGrid />
            </div>
        </div>
    );
}

export default PortfolioWindow;