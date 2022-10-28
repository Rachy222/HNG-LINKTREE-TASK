import Avatar from "../images/rachy.svg";


export default function Profile() {
    return (
        <>
        <img src={Avatar} alt="profile-img" id="profile__img"></img>
        <h3 id="twitter" className="Twitter-Name">
          Ezeh Racheal
        </h3>
        <h3 id="slack" className="Slack-Name">
          Rachy
        </h3>
        </>
  );
}