
export default function Link({href, text}) {
    return (
      <div className="linkdiv">
        <a href={href} target="_blank" rel="noreferrer"><button>{text}</button></a>
      </div>
    );
  }