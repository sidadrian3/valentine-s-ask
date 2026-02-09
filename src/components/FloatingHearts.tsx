import { motion } from "framer-motion";

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 4,
  size: 12 + Math.random() * 16,
  opacity: 0.15 + Math.random() * 0.25,
}));

const FloatingHearts = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {hearts.map((h) => (
      <motion.div
        key={h.id}
        className="absolute text-primary"
        style={{ left: h.left, bottom: -30, fontSize: h.size, opacity: h.opacity }}
        animate={{ y: [0, -window.innerHeight - 60], x: [0, Math.sin(h.id) * 40] }}
        transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "linear" }}
      >
        ♥
      </motion.div>
    ))}
  </div>
);

export default FloatingHearts;
