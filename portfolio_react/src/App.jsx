import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Works from './pages/Works'
import Exercises from './pages/Exercises'
import Projects from './pages/Projects'
import ProjectPage from './pages/Project'
import Footer from './pages/Footer'
import { useEffect, useState } from 'react'
import './app.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="works/exercises" element={<Exercises />} />
          <Route path="works/projects" element={<Projects />} />
          <Route path="project/:slug" element={<ProjectPage />} />
        </Routes>
      <Footer />  
    </Router>
  )
    
}

export default App;
