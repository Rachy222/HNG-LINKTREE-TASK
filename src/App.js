import "./App.css";
import Link from "./components/Links";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Icons from "./components/Icons";
import Shares from "./components/Share";

function App() {
  return (
    <div className="App">
      <div className='share-button'>
         <Shares />
      </div>
      <div className="Profile-Container">
        <Profile />
      </div>

      <div >
        <Link  id="twitter" href="https://twitter.com/jimzz_r/" text="Twitter Link" />

        <Link id="btn__zuri" href="https://training.zuri.team/"  text="Zuri Team" />

        <Link id="books" href="https://books.zuri.team/"  text="Zuri Books" />

        <Link id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E"
          text="Python Books"
        />

        <Link id="pitch"
          href="https://background.zuri.team/"
          text="Background Check for Coders"
        />

        <Link id="book__design" href="https://books.zuri.team/design-rules"  text="Design Books" />
      </div>

      <div className="Social-icon">
        <Icons />
      </div>

      <Footer />
    </div>
  );
}

export default App;
