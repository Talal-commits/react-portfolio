import ProjectCard from "./ProjectCard";

function ProjectGrid(){
    return(
        <div className="project-grid">
            <h2>Featured Projects</h2>
            <div className="projects">
                <ProjectCard title="This is the first Project" />
            </div>
        </div>
    );
}