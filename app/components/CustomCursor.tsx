"use client";

import { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants: Record<string, React.CSSProperties> = {
    default: {
      left: `${mousePosition.x}px`,
      top: `${mousePosition.y}px`,
      transform: "translate(-50%, -50%)",
      width: "10px",
      height: "10px",
    },
    hover: {
      left: `${mousePosition.x}px`,
      top: `${mousePosition.y}px`,
      transform: "translate(-50%, -50%)",
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(100, 255, 218, 0.2)",
    },
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorVariant("hover");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorVariant("default");
  };

  useEffect(() => {
    const links = document.querySelectorAll("a, button");

    links.forEach((link) => {
      link.addEventListener("mouseover", handleMouseEnter);
      link.addEventListener("mouseout", handleMouseLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleMouseEnter);
        link.removeEventListener("mouseout", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 bg-green rounded-full"
      style={{
        ...variants[cursorVariant],
        position: "fixed",
        transition: "all 0.2s ease-out",
      }}
    >
      {isHovered && <div>Hovered!</div>}
    </div>
  );
};

export default CustomCursor;
