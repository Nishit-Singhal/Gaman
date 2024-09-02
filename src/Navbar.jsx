import { Link } from "react-router-dom";
import './css/Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="Headings">
          <Link to="/"><img className="Name"src="./gaman_logo.png"></img></Link>
          <div className="HeadingButtons">Explore More</div>
          <div className="HeadingButtons">Plan Now</div>
          <div className="HeadingButtons">Share Tips</div>
          <div className="HeadingButtons">Discover</div>
          <Link to="/blogs" className="HeadingButtons">Blogs</Link>
          <div className="HeadingButtons">SOS</div>
        </div>
        <div className="AuthButtons">
          <button className="SignUpButton">
            <Link to="/login">Login</Link>
          </button>
          <button className="SignUpButton">
            <Link to="/signup">SignUp</Link>
          </button>
        </div>
      </nav>
    </>
  );
}
