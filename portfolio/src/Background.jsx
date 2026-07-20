import bg from './assets/bgimage.jpg';
import myComputer from './assets/myComputer.png';
import folder from './assets/folder.png';
import about from './assets/aboutme.png';
import cv from './assets/cv.png';
import bin from './assets/recyclebin.png';
import Icon from './icon.jsx';
import Taskbar from './taskbar.jsx';

function Background() {
    return (
        <>
            <img className="background" src={bg} />
            <div>
                <Icon image={myComputer} label="My Portfolio" />
                <Icon image={folder} label="My Projects" />
                <Icon image={about} label="About Me" />
                <Icon image={cv} label="Resume" />
                <Icon image={bin} label="Recycle Bin" />
            </div>
        </>
    );
}

export default Background;