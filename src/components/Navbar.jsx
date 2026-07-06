import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {

  return (

    <motion.nav

      className="navbar"

      initial={{ y: -40, opacity: 0 }}

      animate={{ y: 0, opacity: 1 }}

      transition={{ duration: .6 }}

    >

      <a href="/" className="left">

        <img
          src={logo}
          alt="ResourceHub"
        />

        <div>

          <h2>ResourceHub</h2>

          <p>by Bits.priyam</p>

        </div>

      </a>

      <a

        href="https://instagram.com/bits.priyam"

        target="_blank"

        rel="noreferrer"

        className="insta"

      >

        Instagram

      </a>

    </motion.nav>

  );

}
