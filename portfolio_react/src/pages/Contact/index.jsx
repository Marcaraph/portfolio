import './contact.css'
import github from '../../assets/github_icon.png'
import linkedin from '../../assets/linkedin.png'

const Contact = () => {
  return (
    <section id='contactPage'>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm' >
          <input type="text" className="name" placeholder='Your name' />
          <input type="email" className="email" placeholder='Your email' />
          <textarea name="message" rows={5} className='msg' placeholder='Your message'></textarea>
          <button type='submit' value="send" className="submitBtn">Envoyer</button>
          <div className="links">
            <img src={github} alt="" className="link" />
            <img src={linkedin} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;