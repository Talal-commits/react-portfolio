import start from "./assets/start.png";
import TitleBar from "./TitleBar";
import MenuBar from "./MenuBar";
import SideBar from "./SideBar";
import ProjectGrid from "./ProjectGrid";

function PortfolioWindow({ onClose }){
    return(
        <div className="window">
            <TitleBar title={"Talal Munir | Software Engineer"} onClose={onClose}/>
            <MenuBar />
            <div className="window-content">
                <SideBar title={"Project Categories"} categories={["Frontend", "Backend", "UI / UX"]} />
                <ProjectGrid />
            </div>
        </div>
    );
}

export default PortfolioWindow;