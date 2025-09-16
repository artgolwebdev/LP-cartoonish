import { motion } from "motion/react";
import { LazyImage } from "./LazyImage";
import { Award, Star, Globe, Tv } from "lucide-react";

export function InstructorBio() {
  const achievements = [
    {
      icon: <Award className="text-gold-600" size={20} />,
      text: "מקום שני באוקראינה בגיל 14",
      year: "2006",
      color: "bg-yellow-100 border-yellow-400"
    },
    {
      icon: <Star className="text-gold-600" size={20} />,
      text: "מקום ראשון בישראל",
      year: "2006",
      color: "bg-orange-100 border-orange-400"
    },
    {
      icon: <Globe className="text-blue-600" size={20} />,
      text: "ייצוג ישראל בגרמניה",
      year: "2006",
      color: "bg-blue-100 border-blue-400"
    },
    {
      icon: <Tv className="text-purple-600" size={20} />,
      text: '"הדבר הגדול הבא"',
      year: "",
      color: "bg-purple-100 border-purple-400"
    }
  ];

  const crews = [
    { name: "ברייקרהוליקס", color: "bg-pink-400" },
    { name: "אנסטופבולז", color: "bg-cyan-400" },
    { name: "אריות ציון", color: "bg-green-400" }
  ];

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
                <LazyImage
                  src="https://images.unsplash.com/photo-1549708319-b6e78d2592ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHlvdXRoJTIwZGFuY2V8ZW58MXx8fHwxNzU3ODU2MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Urban dance instructor"
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
                ארטיום גולובן (ארט.ארטיק)
              </h3>
              <p className="text-lg leading-relaxed text-gray-200">
                ארטיום החל לרקוד בגיל 10 יחד עם קבוצת ברייקדאנס מובילה בסצנת הברייקדאנס העולמית. 
                בגיל 14 זכה במקום שני באוקראינה.
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