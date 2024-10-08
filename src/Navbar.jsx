import { Link } from "react-router-dom";
import './css/Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="Headings">
          <Link to="/"><img className="Name"src="./gaman_logo.png"></img></Link>
          <Link to="/travelslider" className="HeadingButtons"><div className="HeadingButtons">Explore More</div></Link>
          <div className="HeadingButtons">Plan Now</div>
          <Link to="/travelgurus" className="HeadingButtons"><div className="HeadingButtons">Travel Gurus</div></Link>
          <div className="HeadingButtons">Discover</div>
          <Link to="/blogs" className="HeadingButtons">Blogs</Link>
          <Link to="/chatbot" className="HeadingButtons">ChatBot</Link>
          <div className="HeadingButtons">SOS</div>
        </div>
        <div className="AuthButtons">
          <button className="SignUpButton">
            <Link to="/login" className="SignUpButton_text">Login</Link>
          </button>
          <button className="SignUpButton">
            <Link to="/signup" className="SignUpButton_text">SignUp</Link>
          </button>
        </div>
      </nav>
    </>
  );
}
