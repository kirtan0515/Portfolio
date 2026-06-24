"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number>(0);
  const mouseRef = useRef({ x: -100, y: -100 });
  const cursorRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only show on desktop with fine pointer
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("[data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("[data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    // Smooth cursor follow with lerp
    const animate = () => {
      cursorRef.current.x += (mouseRef.current.x - cursorRef.current.x) * 0.15;
      cursorRef.current.y += (mouseRef.current.y - cursorRef.current.y) * 0.15;
      setPosition({ x: cursorRef.current.x, y: cursorRef.current.y });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
        }}
        aria-hidden="true"
      >
        <motion.div
          className="rounded-full border border-white -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 50 : 30,
            height: isHovering ? 50 : 30,
            opacity: isHovering ? 0.9 : 0.5,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      </motion.div>
      {/* Inner dot */}
      <div
        className="fixed w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mouseRef.current.x - 2,
          top: mouseRef.current.y - 2,
          opacity: isHovering ? 0 : 1,
          transition: "opacity 0.15s",
        }}
        aria-hidden="true"
      />
    </>
  );
}
