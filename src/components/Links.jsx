
export default function Link({href, text}) {
    return (
      <div className="btns-container">
        <a href={href} target="_blank" rel="noreferrer" id="id">{text}</a>
      </div>
    );
  }