import './home.css'
import bg from '../../assets/Profile_Pic.jpg'

const Home = () => {
  return (
    <section id="home">
      <div className="homeContent">
        <span className="hello">Bonjour,</span>
        <span className="homeText">Je suis <span className="homeName">Raphaël</span> <br />Developpeur Web </span>
        <p className="homePara">Je suis un développeur web passionné, spécialisé dans la création d'expériences en ligne exceptionnelles. Avec une expertise en HTML, CSS, JavaScript et des frameworks modernes comme React.js et Vue.js, je m'engage à fournir des solutions web innovantes et de haute qualité pour concrétiser votre vision en ligne. </p> 
      </div>
      <img src={bg} alt="ProfilePic" className="bg" />
    </section>
  )
};

export default Home;