import './Contact.css';
function Contact() {''
    return(
        <div>
            <section class="contact-section">
  <h2>Contact</h2>
  <p class="contact-subheading">Let’s get in touch and talk about your next project.</p>

  <form class="contact-form">
    <input type="text" placeholder="Name" required />
    <input type="email" placeholder="Email" required />
    <input type="text" placeholder="Subject" required />
    <textarea placeholder="Comment" rows="5" required></textarea>
    <button type="submit">SEND MESSAGE</button>
  </form>
</section>

        </div>
    )
}
export default Contact;