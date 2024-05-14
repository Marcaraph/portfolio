import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/projects?filters[slug]=${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        const projectData = await response.json();
        console.log('Project Data:', projectData);
        setProject(projectData.data[0]);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [slug]);

  if (!project) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h3>{project.attributes.title}</h3>
      <p>Date : {project.attributes.release}</p>
      <p>Description : {project.attributes.description}</p>
    </div>
  );
};

export default ProjectPage;