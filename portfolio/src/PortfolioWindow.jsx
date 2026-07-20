import start from "./assets/start.png";
import TitleBar from "./TitleBar";
import MenuBar from "./MenuBar";
import SideBar from "./SideBar";

function PortfolioWindow(){
    return(
        <div className="window">
            <TitleBar />
            <MenuBar />
            <div className="window-content">

                <SideBar />
                {/* <div className="left-side">
                    <div className="title"></div>
                    <div className="list"></div>
                </div> */}


                {/* <div className="right-side">
                    <h3>Featured Projects</h3>
                    <div className="project">
                        <img src="" />
                    </div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                </div> */}
            </div>
        </div>
    );
}

export default PortfolioWindow;