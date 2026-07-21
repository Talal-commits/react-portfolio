function ProjectCard(props){
    return(
        <div className="project-card">
            <img src={props.image} />
            <p>{props.title}</p>
        </div>
    );
}

export default ProjectCard;