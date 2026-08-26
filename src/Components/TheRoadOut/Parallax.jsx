
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Parallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div className="Parallax">
    <div ref={ref} className="image-container">
      <motion.img
        src="https://images.stockcake.com/public/3/3/d/33d9ad08-c9e8-4875-803f-2ed9db28cd5b_large/sunlit-forest-path-stockcake.jpg"
        alt="The Road Out"
        style={{ y }}
        className="parallax-image"
      />
    </div>
    </div>
  );
}
