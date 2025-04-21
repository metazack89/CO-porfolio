// src/components/MouseTracker.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({
        x: `${e.clientX}px`,
        y: `${e.clientY}px`,
      });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(600px at ${position.x} ${position.y}, rgba(0, 200, 255, 0.1), transparent 80%)`,
      }}
    />
  );
};

export default MouseTracker;
