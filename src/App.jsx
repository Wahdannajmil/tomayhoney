import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Kamu capek kerja ya? Semangat ya, aku bangga banget sama kamu ❤️",
  "Kamu tuh gak cuma ngerawat bayi, tapi juga bikin hatiku tenang 😌",
  "Aku tahu kamu sibuk, tapi aku tetap pengen kamu jaga diri ya 💕",
  "Jangan marah sama aku, karena kalo kamu marah aku nya takutt😍",
  "Kamu itu baik banget... aku gak heran bayi-bayi itu nyaman banget sama kamu 🍼",
  "Kamu kerja terus, tapi jangan lupa bahagia juga ya 😘",
  "Bayi aja bisa tenang sama kamu, apalagi aku 😳",
  "Kamu itu pinter, baikk, cantikk, no minuss deh pokoknyaa💖",
  "Jangann lupa makann , inget sehari harus 3 kalii😅💕",
];

function App() {
  const [message, setMessage] = useState(messages[0]);
  const [showHug, setShowHug] = useState(false);
  const [hearts, setHearts] = useState([]);

  // Efek hati jatuh sederhana
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 18 + 8,
      };
      setHearts((prev) => [...prev, heart]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, 2500);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const changeMessage = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);
  };

  const sendHug = () => {
    setShowHug(true);
    setTimeout(() => setShowHug(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300 text-center overflow-hidden">
      {/* Efek hati jatuh */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -10, opacity: 1 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 2.5, ease: "linear" }}
          className="absolute text-rose-400"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-rose-600 drop-shadow-lg"
      >
        Hai Adeeek 💌
      </motion.h1>

      {/* Pesan */}
      <AnimatePresence mode="wait">
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-rose-700 px-6"
        >
          {message}
        </motion.p>
      </AnimatePresence>

      {/* Tombol interaktif */}
      <div className="mt-8 flex gap-4">
        <motion.button
          onClick={changeMessage}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-white text-rose-500 font-semibold rounded-full shadow-lg hover:bg-rose-100 transition-all"
        >
          Ganti Pesan 💕
        </motion.button>

        <motion.button
          onClick={sendHug}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-full shadow-lg hover:bg-rose-600 transition-all"
        >
          Kirim Peluk 🤗
        </motion.button>
      </div>

      {/* Efek peluk sederhana */}
      <AnimatePresence>
        {showHug && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute text-6xl md:text-8xl"
            style={{
              top: "40%",
            }}
          >
            🤗💞
          </motion.div>
        )}
      </AnimatePresence>

      <p className="absolute bottom-5 text-rose-700 opacity-80 text-sm">
        Dari <strong>Mas Wahdan</strong> buat <strong>Dede Perawat Hebat 💖</strong>
      </p>
    </div>
  );
}

export default App;
