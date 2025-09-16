import { motion } from "motion/react";
import { Music, Star, Zap } from "lucide-react";
import { Video } from "./ui/Video";
import { VIDEO_ASSETS } from "../constants/assets";
import { CLASS_INFO } from "../constants/classInfo";
import { useMobileOptimizedMotion } from "../hooks/useMobileOptimizedMotion";

export function Hero() {
  const { isMobile, prefersReducedMotion, getOptimizedTransition, getOptimizedAnimation } = useMobileOptimizedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-70"
          animate={getOptimizedAnimation(
            {
              x: [0, 20, 0],
              y: [0, -15, 0],
              rotate: [0, 180, 360],
            },
            {
              x: [0, 10, 0],
              y: [0, -8, 0],
              rotate: [0, 90, 180],
            }
          )}
          transition={getOptimizedTransition({
            desktop: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            mobile: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            reducedMotion: { duration: 0.1, repeat: 0 }
          })}
        />
        <motion.div
          className="absolute top-20 sm:top-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-cyan-400 rounded-full opacity-60"
          animate={getOptimizedAnimation(
            {
              x: [0, -20, 0],
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            },
            {
              x: [0, -10, 0],
              y: [0, 10, 0],
              scale: [1, 1.1, 1],
            }
          )}
          transition={getOptimizedTransition({
            desktop: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            mobile: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            reducedMotion: { duration: 0.1, repeat: 0 }
          })}
        />
        <motion.div
          className="absolute bottom-20 sm:bottom-32 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-green-400 rotate-45 opacity-50"
          animate={getOptimizedAnimation(
            {
              rotate: [45, 225, 45],
              scale: [1, 1.3, 1],
            },
            {
              rotate: [45, 135, 45],
              scale: [1, 1.1, 1],
            }
          )}
          transition={getOptimizedTransition({
            desktop: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
            mobile: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
            reducedMotion: { duration: 0.1, repeat: 0 }
          })}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            dir="rtl"
          >
            <motion.div
              className="flex justify-center lg:justify-end items-center gap-3 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="text-yellow-300 fill-yellow-300" size={28} />
              <Zap className="text-yellow-300 fill-yellow-300" size={32} />
              <Music className="text-yellow-300 fill-yellow-300" size={28} />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontWeight: 800 }}
            >
              {CLASS_INFO.TITLE}
            </motion.h1>

            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-2xl border-4 border-yellow-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-2xl md:text-3xl text-purple-800 mb-2" style={{ fontWeight: 700 }}>
                {CLASS_INFO.LOCATION}, {CLASS_INFO.GRADES}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {CLASS_INFO.DESCRIPTION}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="bg-cyan-400 text-cyan-900 px-4 py-2 rounded-full text-sm font-semibold">
                חוש קצב ⚡
              </div>
              <div className="bg-pink-400 text-pink-900 px-4 py-2 rounded-full text-sm font-semibold">
                ביטחון עצמי 🚀
              </div>
              <div className="bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-semibold">
                חיזוק שרירים 💪
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-60"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-white p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white">
                <Video
                  src={VIDEO_ASSETS.HERO}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,120 L0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}