import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {

    function handleClick(e) {

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }

    }

    function handleEsc(e) {

      if (e.key === "Escape") {
        setOpen(false);
      }

    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);

    return () => {

      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);

    };

  }, []);

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

      <div
        className="menuWrapper"
        ref={menuRef}
      >

        <button

          className="menuBtn"

          onClick={() => setOpen(!open)}

        >

          ☰

        </button>

        <AnimatePresence>

          {open && (

            <motion.div

              className="profileMenu"

              initial={{
                opacity:0,
                y:-12,
                scale:.96
              }}

              animate={{
                opacity:1,
                y:0,
                scale:1
              }}

              exit={{
                opacity:0,
                y:-10,
                scale:.96
              }}

              transition={{
                duration:.22
              }}

            >

              <div className="menuHeader">

                <img
                  src={logo}
                  alt="logo"
                />

                <div>

                  <h3>Bits.priyam</h3>

                  <p>Building useful internet tools.</p>

                </div>

              </div>

              <div className="divider"></div>

              <a
                href="https://instagram.com/bits.priyam"
                target="_blank"
                rel="noreferrer"
              >
                📸 Instagram
              </a>

              <a
                href="https://github.com/priyamm1007-jpg"
                target="_blank"
                rel="noreferrer"
              >
                💻 GitHub
              </a>

              <a href="#">
                🌐 Portfolio
              </a>

              <a href="#">
                🤖 Reverse Hunt <small>(Soon)</small>
              </a>

              <div className="divider"></div>

              <span className="version">
                ResourceHub v1.0
              </span>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.nav>

  );

}
