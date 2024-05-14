import { Link } from 'react-router-dom';

const WorksNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/works/exercises">Exercises</Link>
        </li>
        <li>
          <Link to="/works/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default WorksNavbar;