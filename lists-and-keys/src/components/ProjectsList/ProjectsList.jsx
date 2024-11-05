import { useState } from "react"
import { projectsData } from "../../data/fakeApi"

const ProjectsList = () => {

    const [projects, setProjects] = useState(projectsData)

    return (
        <div className="ProjectsList">

            <h2>Proyectos</h2>

            {
                projects.map(eachProject => {
                    return (
                        <article key={eachProject._id}>
                            <h1>{eachProject.name}</h1>
                            <p>Stack: {eachProject.techStack}</p>
                            <hr />
                        </article>
                    )
                })
            }
        </div>
    )
}

export default ProjectsList