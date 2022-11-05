import "../App.css";
import React from "react";
// import Link from "../components/Links";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Icons from "../components/Icons";
import Shares from "../components/Share";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="App">
      <div className="share-button">
        <Shares />
      </div>
      <div className="Profile-Container">
        <Profile />
      </div>

      <div className="btns-container">
      <a href="https://twitter.com/imrvon" id='twitter'>Twitter Link</a>
            <a href="https://training.zuri.team/" id='btn__zuri'>Zuri Team</a>
            <a href="http://books.zuri.team/" id='books'>Zuri Books</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=Rachy" id='book__python'>Python Books</a>
            <a href="https://background.zuri.team/" id='pitch'>Background Check for Coders</a>
            <a href="https://books.zuri.team/design-rules" id='book__design'>Design Books</a>
            <Link to={"/contact"}  id="contact" className="contact-link">Contact Me</Link>

        {/* Here's Another Method to add up links externally*/}
        {/* <Link
          id="twitter"
          href="https://twitter.com/jimzz_r/"
          text="Twitter Link"
        />

        <Link
          id="btn__zuri"
          href="https://training.zuri.team/"
          text="Zuri Team"
        />

        <Link id="books" href="https://books.zuri.team/" text="Zuri Books" />

        <Link
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=Rachy"
          text="Python Books"
        />

        <Link
          id="pitch"
          href="https://background.zuri.team/"
          text="Background Check for Coders"
        />

        <Link
          id="book__design"
          href="https://books.zuri.team/design-rules"
          text="Design Books"
        /> */}

      </div>

      <div className="Social-icon">
        <Icons />
      </div>
       <hr/>
      <Footer />
    </div>
  );
}

export default Home;
