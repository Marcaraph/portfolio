import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const projectsData = await response.json();
        console.log('Data from API:', projectsData)
        setProjects(projectsData.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          console.log(projects),
          <li key={project.id}>
            <Link to={`/project/${project.attributes.slug}`}>
            {project.attributes.title}
            </Link>
            <p>Date : {project.attributes.release}</p>
            <p>Description : {project.attributes.description}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;