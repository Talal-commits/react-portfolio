import ProjectCard from "./ProjectCard";

function ProjectGrid(){
    return(
        <div className="project-grid">
            <h2>Featured Projects</h2>
            <div className="projects">
                <ProjectCard image="https://picsum.photos/400/250?random=1" title="First Project" />
                <ProjectCard image="https://picsum.photos/400/250?random=1" title="Second Project" />
                <ProjectCard image="https://picsum.photos/400/250?random=1" title="Third Project" />
                <ProjectCard image="https://picsum.photos/400/250?random=1" title="Fourth Project" />
                <ProjectCard image="https://picsum.photos/400/250?random=1" title="Fifth Project" />
                <ProjectCard image="https://picsum.photos/400/250?random=1" title="Sixth Project" />
            </div>
        </div>
    );
}

export default ProjectGrid;