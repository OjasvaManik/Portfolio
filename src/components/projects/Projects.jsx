import projects from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects () {
    const projectDetails = projects.map(project => {
        return (
            <ProjectCard
                key = {project.id}
                {...project}
            />
        )
    })

    return (
        <div className={'card flex flex-wrap justify-center'}>
            {projectDetails}
        </div>
    );
}