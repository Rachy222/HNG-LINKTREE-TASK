import Avatar from "../images/Rachy.jpg";
import Hover from "../images/hover-icon.svg";


export default function Profile() {
    return (
        <>
        <img src={Avatar} id="profile__img" alt="profile-img" ></img>
        <img src={Hover} className='edit'  alt="hover-icon" />
        <h3 id="twitter" className="Twitter-Name">
          Ezeh Racheal
        </h3>
        <h3 id="slack" className="Slack-Name">
          Rachy
        </h3>
        </>
  );
}