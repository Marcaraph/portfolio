import './about.css';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import github from '../../assets/github.png'
import postgre from '../../assets/postgre.png'
import rails from '../../assets/rails.png'
import ruby from '../../assets/ruby.png'
import react from '../../assets/react.png'
import js from '../../assets/js.png'

const About = () => {
  return (
    <section id='about'>
        <span className="aboutTitle">Qui suis-je ?</span> <br />
        <span className="aboutDesc">Mon approche du développement web est centrée sur l'utilisateur. Je m'efforce de comprendre les besoins et les préférences de mes clients, afin de créer des solutions sur mesure qui offrent une expérience utilisateur optimale. Mon obsession pour les détails et mon souci de la qualité se reflètent dans chaque ligne de code que j'écris.
Doté d'une curiosité insatiable et d'une volonté constante d'apprendre, je reste à l'affût des dernières technologies et tendances du secteur. Que ce soit pour créer des sites web réactifs et intuitifs, des applications web complexes ou des interfaces utilisateur interactives, je m'engage à fournir des solutions innovantes et de haute qualité, répondant aux besoins de mes clients.
<br/>Mon parcours professionnel est marqué par une série de projets variés et stimulants, allant de la conception et du développement de sites web d'entreprise à la création d'applications web sur mesure. Chaque projet représente pour moi un défi passionnant et une opportunité de repousser mes limites, tout en offrant des solutions technologiques de pointe.
Je suis convaincu que la collaboration étroite avec mes clients est la clé du succès. Je m'engage à écouter attentivement leurs besoins, à communiquer de manière transparente tout au long du processus de développement et à fournir un soutien continu même après la livraison du projet.
        Si vous recherchez un développeur web dévoué, compétent et orienté vers les résultats pour concrétiser votre vision en ligne, je serais ravi de discuter de votre projet et de voir comment je peux vous aider à atteindre vos objectifs.</span>
        <div className='aboutSkills'>
          <div className="aboutSkillsLeft">
            <div className="aboutSkill">
              <img src={html} alt="Logo HTML" className="skillImg" />
              <div className="aboutSkillText">
                <h2>HTML 5</h2>
              </div>
            </div>
            <div className="aboutSkill">
              <img src={react} alt="Logo React" className="skillImg" />
              <div className="aboutSkillText">
                <h2>React</h2>
                <p></p>
              </div>
            </div>
            <div className="aboutSkill">
              <img src={ruby} alt="Logo Ruby" className="skillImg" />
              <div className="aboutSkillText">
                <h2>Ruby</h2>
                <p></p>
              </div>
            </div>
            <div className="aboutSkill">
              <img src={github} alt="Logo Github" className="skillImg" />
              <div className="aboutSkillText">
                <h2>Github</h2>
                <p></p>
              </div>
            </div>
          </div>
          <div className='aboutSkillsRight'>
            <div className="aboutSkill">
              <img src={css} alt="Logo CSS" className="skillImg" />
              <div className="aboutSkillText">
                <h2>CSS 3</h2>
                <p></p>
              </div>
            </div>
            <div className="aboutSkill">
              <img src={js} alt="Logo JS" className="skillImg" />
              <div className="aboutSkillText">
                <h2>Javascript</h2>
                <p></p>
              </div>
            </div>
            <div className="aboutSkill">
              <img src={rails} alt="Logo Rails" className="skillImg" />
              <div className="aboutSkillText">
                <h2>Ruby on Rails</h2>
                <p></p>
              </div>
            </div>
            <div className="aboutSkill">
              <img src={postgre} alt="Logo PostgreSQL" className="skillImg" />
              <div className="aboutSkillText">
                <h2>PostgreSQL</h2>
                <p></p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )

}
export default About;