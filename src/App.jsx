import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./index.css";

export default function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (
    <>
      <div
        className="spotlight"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <Home />
    </>
  );

}
