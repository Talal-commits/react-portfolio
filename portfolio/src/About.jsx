import TitleBar from "./TitleBar";
import MenuBar from "./MenuBar";

function About() {
    return (
        <div className="window">
            <TitleBar title={"About Me.txt - Notepad"} />
            <MenuBar />
            <div className="window-content">
                <div className="paragraph">
                    <h5> ==================================================<br />
                        Talal Munir - Talal Munir, a web developer with 5+ years of experience specializing in custom interactive retro UI and backend systems.<br />
                        SPECIALIZING in Node.js, JS, SQL, and classic front-end technologies. Known for blending vintage aesthetics with modern performance.<br />
                        ==================================================<br />

                        - Technical Expertise: [Node.js, JS, SQL, Tailwind, Retro UI]<br />
                        - Experience: TechCorp (2020-Present), WebStudio (2018-2020)<br />
                        - Philosophy: "Complexity should look simple."<br />

                        ==================================================</h5>
                </div>
            </div>
        </div>
    );
}

export default About;