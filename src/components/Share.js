import Share1 from "../images/Share-desktop.svg";
import Share2 from "../images/Share-mobile.svg";

export default function Shares() {
    return (
      <>
        <img src={Share1} alt="share-btn" className='share-desktop' />
        <img src={Share2} alt="share-btn" className='share-mobile'/>
      </>
    );
  }
