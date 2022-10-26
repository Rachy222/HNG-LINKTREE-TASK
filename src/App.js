import './App.css';
// import Logo from './public/images/rachy.svg';
// import Slack from './public/images/slack.svg';
// import GitHub from './pubic/images/Icon.svg';
// import I4G from './public/images/I4G.svg';
// import Zuri from './images/zuri-text.svg';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="Content">
          REACT PROFILE TASK
        </h1>
        <img scr="./images/rachy.svg" alt="profile-img" id="profile__img"></img>
        <h3 id="twitter" className="Twitter-Name"> Ezeh Racheal </h3>
        <h3 id="slack" className="Slack-Name"> Rachy</h3>
      </div>

      <div>
       <a href="https://twitter.com/jimzz_r" target="_blank" rel="noreferrer"> <button>
          Twitter Link
        </button></a>

        <a href="https://training.zuri.team/" target="_blank" rel="noreferrer"> <button>
          Zuri Team
        </button></a>

        <a href="https://books.zuri.team/" target="_blank" rel="noreferrer"> <button>
          Zuri Books
        </button></a>

        <a href="https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E" target="_blank" rel="noreferrer"> <button>
          Python Books
        </button></a>

        <a href="https://background.zuri.team/" target="_blank" rel="noreferrer"> <button>
          Background Check for Coders
        </button></a>

        <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer"> <button>
          Design Books
        </button></a>
      </div>

      <div className="Social-icon">
        <img scr="./images/slack.svg" alt="Slack-icon"></img> &nbsp; &nbsp;
        <img scr="./images/Icon.svg" alt="Github-icon"></img>
      </div>

      <footer>
        <h2> Zuri Internship</h2>
        <p> HNG 9 Internship Frontend Task</p>
        <img scr="./images/I4G.svg" alt="I4G-icon"></img>
      </footer>
    </div>
  );
}

export default App;
