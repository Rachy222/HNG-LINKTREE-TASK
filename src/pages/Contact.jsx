import "../App.css";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="Contact-container">
      <div className="Contact-header">
        <h2> Contact Me</h2>
        <p className="Contact-paragraph"> Hi there, contact me to ask me about anything you have in mind. </p>
      </div>

      <form action="">
        <div className="Name-container">
          <div className="FirstName-input">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              name=""
              id="first_name"
              placeholder="  &nbsp;Enter your first name"
              required
            />
          </div>

          <div className="LastName-input">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name=""
              id="last_name"
              placeholder="  &nbsp;Enter your last name"
              required
            />
          </div>
        </div>

        <div className="Email-input">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name=""
            id="email"
            placeholder=" &nbsp;yourname@email.com"
            required
          />
        </div>

        <div className="Message-input">
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            required
          />
        </div>

        <div className="Agree-terms">
          <input type="checkbox" name="" id="" required />
          <span>
            &nbsp; You agree to providing your data to {"Rachy"} who may contact you.
          </span>
        </div>

        <div>
        <button type="submit" value="send message" id="btn__submit" required>Send Message </button>
        </div>
      </form>

      <div className="Footer-container">
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
