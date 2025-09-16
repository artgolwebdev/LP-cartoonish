import React from "react";
import { motion } from "motion/react";
import { LazyImage } from "./LazyImage";
import { Award, Star, Globe, Tv } from "lucide-react";
import { Video } from "./ui/Video";
import { VIDEO_ASSETS } from "../constants/assets";
import { INSTRUCTOR_INFO } from "../constants/classInfo";

export function InstructorBio() {
  const iconMap = {
    Award: Award,
    Star: Star,
    Globe: Globe,
    Tv: Tv,
  };

  const achievements = INSTRUCTOR_INFO.ACHIEVEMENTS.map(achievement => ({
    ...achievement,
    icon: React.createElement(iconMap[achievement.icon as keyof typeof iconMap], {
      className: `text-${achievement.color.split('-')[1]}-600`,
      size: 20
    })
  }));

  const crews = INSTRUCTOR_INFO.CREWS;

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent" style={{ fontWeight: 800 }} dir="rtl">
            המדריך שלנו
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Instructor Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                <Video
                  src={VIDEO_ASSETS.INSTRUCTOR_BIO}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            dir="rtl"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h3 className="text-3xl mb-4 text-yellow-300" style={{ fontWeight: 700 }}>
                {INSTRUCTOR_INFO.NAME}
              </h3>
              <p className="text-lg leading-relaxed text-gray-200">
                {INSTRUCTOR_INFO.BIO}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-2xl text-yellow-300 mb-4" style={{ fontWeight: 600 }}>
                הישגים והכרה 🏆
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/90 text-gray-800 p-4 rounded-xl flex items-start gap-3 shadow-lg border-2 border-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, borderColor: "currentColor" }}
                  >
                    {achievement.icon}
                    <div>
                      <div style={{ fontWeight: 600 }}>{achievement.text}</div>
                      {achievement.year && (
                        <div className="text-sm text-gray-600">{achievement.year}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Crews */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="text-2xl text-yellow-300 mb-4" style={{ fontWeight: 600 }}>
                להקות ברייקדאנס 🎭
              </h4>
              <p className="text-gray-200 mb-4 leading-relaxed">
                היה חבר בלהקות הברייקדאנס "ברייקרהוליקס" ו"אנסטופבולז" איתם זכה באליפויות ארציות ובתחרויות בין לאומיות בחו"ל.
              </p>
              <div className="flex flex-wrap gap-3">
                {crews.map((crew, index) => (
                  <motion.div
                    key={index}
                    className={`${crew.color} text-gray-900 px-4 py-2 rounded-full shadow-lg`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    style={{ fontWeight: 600 }}
                  >
                    {crew.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}