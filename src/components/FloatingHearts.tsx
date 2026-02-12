import { motion } from "framer-motion";
import catflower from "@/assets/catflower.png";
import poodleflowers from "@/assets/poodleflowers.png";
import dogflowers from "@/assets/dogflowers.png";
import selfiedogs from "@/assets/selfiedogs.png";
import doghoodie from "@/assets/doghoodie.png";
import catcute from "@/assets/catcute.png";
import catHeart from "@/assets/cat_heart.jpg";

const floatingItems = [
  { src: catflower, left: "5%", delay: 0, duration: 7, size: 220, opacity: 0.15, rotate: 12 },
  { src: poodleflowers, left: "85%", delay: 2, duration: 8, size: 220, opacity: 0.12, rotate: -8 },
  { src: dogflowers, left: "45%", delay: 4, duration: 9, size: 220, opacity: 0.12, rotate: 20 },
  { src: selfiedogs, left: "20%", delay: 1, duration: 6, size: 220, opacity: 0.13, rotate: -15 },
  { src: doghoodie, left: "70%", delay: 3, duration: 7.5, size: 220, opacity: 0.11, rotate: 5 },
  { src: catcute, left: "55%", delay: 5, duration: 8.5, size: 220, opacity: 0.14, rotate: -10 },
  { src: catHeart, left: "35%", delay: 6, duration: 7, size: 220, opacity: 0.1, rotate: 15 },
];

const hearts = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 4,
  size: 12 + Math.random() * 16,
  opacity: 0.15 + Math.random() * 0.2,
}));

const FloatingHearts = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {hearts.map((h) => (
      <motion.div
        key={`heart-${h.id}`}
        className="absolute text-primary"
        style={{ left: h.left, bottom: -30, fontSize: h.size, opacity: h.opacity }}
        animate={{ y: [0, -window.innerHeight - 60], x: [0, Math.sin(h.id) * 40] }}
        transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "linear" }}
      >
        ♥
      </motion.div>
    ))}
    {floatingItems.map((item, i) => (
      <motion.img
        key={`img-${i}`}
        src={item.src}
        alt=""
        className="absolute rounded-full"
        style={{
          left: item.left,
          bottom: -item.size,
          width: item.size,
          height: item.size,
          opacity: item.opacity,
          rotate: `${item.rotate}deg`,
          objectFit: "cover",
        }}
        animate={{
          y: [0, -window.innerHeight - item.size - 60],
          x: [0, Math.sin(i * 2) * 50],
          rotate: [item.rotate, item.rotate + 360],
        }}
        transition={{
          duration: item.duration,
          delay: item.delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export default FloatingHearts;
