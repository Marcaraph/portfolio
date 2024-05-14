import './contact.css'
import { useRef } from 'react'
import github from '../../assets/github_icon.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ddreydq', 'template_s0n1vyh', form.current, {
        publicKey: 'Hd5bbc81OE0Fe7Uov',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };  

  return (
    <section id='contactPage'>
      <div id="contact">
        <h1 className="contactPageTitle">Contactez-Moi</h1>
        <span className="contactDesc">Veuillez remplir le formulaire ci-dessous pour discuter de toute opportunité de travail</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Votre nom' name='your_name' />
          <input type="email" className="email" placeholder='Votre email' name='your_email' />
          <textarea name="message" rows={5} className='msg' placeholder='Votre message'></textarea>
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