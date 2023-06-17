import { Link } from "react-router-dom";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <footer className="w-screen h-24 bg-primary flex justify-center align-center">
      <nav className="w-4/5 flex justify-between align-center items-center">
        <Link to="/" >
          <h5 className="text-black px-auto">DevInLingua</h5>
        </Link>
        <div className="flex">
          <Link target="_blank" title="Link para o LinkedIn" to="https://www.linkedin.com/in/bruno-costa-b9b3141a2/">
            <IoLogoLinkedin className="text-3xl mx-3" />
          </Link>
          <Link target="_blank" title="Link para o Instagram" to="https://www.linkedin.com/in/bruno-costa-b9b3141a2/">
            <IoLogoInstagram className="text-3xl" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;