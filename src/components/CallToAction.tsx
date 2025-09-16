import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-300/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-green-300/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl mb-8 text-white drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontWeight: 800 }}
            dir="rtl"
          >
            בואו לרקוד איתנו!
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            dir="rtl"
          >
            הצטרפו לחוג הברייקדאנס המגניב ביותר באזור ותתחילו את המסע שלכם בעולם הריקוד!
          </motion.p>

          {/* Class Details Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border-4 border-yellow-300"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Users className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-xl mb-2 text-purple-800" style={{ fontWeight: 700 }} dir="rtl">
                גילאים
              </h3>
              <p className="text-purple-700" style={{ fontWeight: 600 }} dir="rtl">
                כיתות א׳-ו׳
              </p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border-4 border-pink-300"
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.3 }}
            >
              <Calendar className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-xl mb-2 text-purple-800" style={{ fontWeight: 700 }} dir="rtl">
                מתי?
              </h3>
              <p className="text-purple-700" style={{ fontWeight: 600 }} dir="rtl">
                יום ראשון
              </p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border-4 border-cyan-300"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-xl mb-2 text-purple-800" style={{ fontWeight: 700 }} dir="rtl">
                איפה?
              </h3>
              <p className="text-purple-700" style={{ fontWeight: 600 }} dir="rtl">
                מגוונים אלון-הדר
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-3xl blur-2xl opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <Button
              asChild
              className="relative bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-purple-900 px-12 py-6 text-2xl rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-all duration-300"
              style={{ fontWeight: 800 }}
            >
              <motion.a
                href="https://www.migvanim.com/html5/ProLookup.taf?_ID=49047&did=4455&G=12550&SM="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                dir="rtl"
              >
                <span>הרשמה לחוג 🚀</span>
                <ArrowLeft className="transform scale-x-[-1]" size={28} />
              </motion.a>
            </Button>
          </motion.div>

          {/* Additional encouragement */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 text-purple-800 px-6 py-3 rounded-full shadow-lg" style={{ fontWeight: 600 }}>
              ⚡ מקומות מוגבלים
            </div>
            <div className="bg-white/80 text-purple-800 px-6 py-3 rounded-full shadow-lg" style={{ fontWeight: 600 }}>
              🎉 חוויה בלתי נשכחת
            </div>
            <div className="bg-white/80 text-purple-800 px-6 py-3 rounded-full shadow-lg" style={{ fontWeight: 600 }}>
              💪 מדריך מנוסה
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}