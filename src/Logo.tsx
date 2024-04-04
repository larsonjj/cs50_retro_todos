import logoArt from "./assets/ascii/logo_art";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <pre className="art">{logoArt}</pre>
    </div>
  );
}

export default Logo;
