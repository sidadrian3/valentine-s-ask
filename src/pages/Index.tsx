import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import dogflowers from "@/assets/dogflowers.png";
import selfiedogs from "@/assets/selfiedogs.png";
import poodleflowers from "@/assets/poodleflowers.png";

const wittyNoTexts = [
  "No!",
  "Sure na ba?",
  "Think again...",
  "Pretty pleasheu?",
  "PLEASEPLEASEPLEASE",
  "Don't do this",
  "My hearteuuu ",
  "Last chanceu lab ",
];

const Index = () => {
  const [step, setStep] = useState<"letter" | "message" | "question" | "accepted">("letter");
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);

  const yesScale = 1 + noCount * 0.2;

  const handleNo = useCallback(() => {
    setNoCount((c) => c + 1);
    setNoPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  }, []);

  // Step 1: Just a letter
  if (step === "letter") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <FloatingHearts />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-center cursor-pointer"
          onClick={() => setStep("message")}
        >
          <motion.img
            src={poodleflowers}
            alt="A letter for you"
            className="w-52 h-52 md:w-64 md:h-64 mx-auto rounded-2xl shadow-lg object-cover"
            whileHover={{ scale: 1.08, rotate: 3 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-6 text-lg text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tap to open 💌
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Step 2: Message reveal
  if (step === "message") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <FloatingHearts />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-center max-w-lg cursor-pointer"
          onClick={() => setStep("question")}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-6xl mb-6"
          >
            💕
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            I know you are already mine, but...
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="mt-8 text-lg text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tap to continue 💗
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Step 4: Accepted
  if (step === "accepted") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <FloatingHearts />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="z-10 text-center px-6"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-7xl mb-6"
          >
            ❤️
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Yaaaay!! 🥰
          </h1>
          <p
            className="text-xl md:text-2xl text-foreground/80 mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I knew you'd say yes! You just made me the happiest person ever 💕
          </p>
          <motion.img
            src={selfiedogs}
            alt="Cute bear with heart"
            className="w-56 h-56 mx-auto rounded-2xl shadow-lg object-cover"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </motion.div>
      </div>
    );
  }

  // Step 3: The question with Yes/No
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-6xl mb-4"
        >
          🌹
        </motion.div>

        <motion.img
          src={dogflowers}
          alt="Valentine roses bouquet"
          className="w-52 h-52 mx-auto rounded-2xl shadow-lg object-cover mb-8"
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Will you be my Valentine?
        </h2>

        <h3 className="text-xl text-foreground/70 mb-8" style={{ fontFamily: "var(--font-body)" }}>
          everyday is valentine's day with you though...
        </h3>

        <div className="flex items-center justify-center gap-4 flex-wrap relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: yesScale }}
            onClick={() => setStep("accepted")}
            className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Yes! 💖
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            animate={noPos ? { x: noPos.x, y: noPos.y } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={handleNo}
            className="bg-muted text-muted-foreground font-bold py-3 px-8 rounded-full text-lg hover:bg-muted/80 transition-colors"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: Math.max(16 - noCount * 1, 10),
            }}
          >
            {wittyNoTexts[Math.min(noCount, wittyNoTexts.length - 1)]}
          </motion.button>
        </div>

        {noCount > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-body)" }}
          >
            LALAKI LANG TOOOHH
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Index;
