import I4G from "../images/I4G.svg";
import Zuri from "../images/zuri-logo.svg";

export default function Footer() {
  return (

    <footer>
      <img src={Zuri} alt="Zuri-logo" className="Zuri-icon"></img>
      <p> HNG 9 Internship Frontend Task</p>
      <img src={I4G} alt="I4G-icon" className="I4G-Logo"></img>
    </footer>
  );
}
