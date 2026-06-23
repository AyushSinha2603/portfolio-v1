"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MorphSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // 3D Morph effects:
  // Scale down dramatically
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  // Tilt back into the screen (using perspective)
  const rotateX = useTransform(scrollYProgress, [0, 1], ["0deg", "12deg"]);
  // Move down slightly (pixels instead of % to prevent huge shifts on tall sections)
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  // Depth of field blur
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(15px)"]);
  // Round the corners as it morphs into a floating card
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  
  // Shadow overlay to simulate it falling deep into darkness
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.8]);

  return (
    <div ref={ref} className={`w-full relative [perspective:2000px] ${className}`}>
      <motion.div
        style={{ scale, rotateX, y, filter, borderRadius }}
        className="w-full h-full origin-top will-change-transform overflow-hidden relative"
      >
        {children}
        {/* Dynamic Shadow Layer */}
        <motion.div 
          style={{ opacity: shadowOpacity }}
          className="absolute inset-0 bg-black pointer-events-none z-50"
        />
      </motion.div>
    </div>
  );
}
