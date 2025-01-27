"use client";

import { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

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

  useEffect(() => {
    const addHoverEffect = (e: MouseEvent) => setCursorVariant("hover");
    const removeHoverEffect = (e: MouseEvent) => setCursorVariant("default");

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
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
    />
  );
};

export default CustomCursor;
