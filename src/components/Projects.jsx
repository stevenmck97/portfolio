import "../styles/projects.css";

export const Projects = () => { 
    return (
        <section className="Projects">
            <h1>Some of my personal projects</h1>
            <div className="projects_container">
                <ul>
                <li><img className="project-card" src="helpful-project.jpg" alt="helpful recruitment" /></li>
                <li><img className="project-card" src="helpful-project.jpg" alt="helpful recruitment" /></li>
                <li><img className="project-card" src="helpful-project.jpg" alt="helpful recruitment" /></li>
                </ul>
                <ul>
                <li><img className="project-card" src="helpful-project.jpg" alt="helpful recruitment" /></li>
                <li><img className="project-card" src="helpful-project.jpg" alt="helpful recruitment" /></li>
                <li><img className="project-card" src="helpful-project.jpg" alt="helpful recruitment" /></li>
                </ul>
                </div>
            </section>
    )
}