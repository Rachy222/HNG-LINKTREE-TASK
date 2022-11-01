
export default function Link({href, text}) {
    return (
      <div className="btns-container">
        <a href={href} target="_blank" rel="noreferrer">{text}</a>
      </div>
    );
  }