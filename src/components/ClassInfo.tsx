import { motion } from "motion/react";
import { LazyImage } from "./LazyImage";
import { Sparkles, Target, Users, Trophy } from "lucide-react";

export function ClassInfo() {
  const benefits = [
    {
      icon: <Target className="text-purple-600" size={24} />,
      text: "פיתוח חוש קצב",
      color: "bg-purple-100 border-purple-300"
    },
    {
      icon: <Users className="text-pink-600" size={24} />,
      text: "יכולת משחק",
      color: "bg-pink-100 border-pink-300"
    },
    {
      icon: <Sparkles className="text-yellow-600" size={24} />,
      text: "ביטחון עצמי",
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      icon: <Trophy className="text-green-600" size={24} />,
      text: "עמידה מול קהל",
      color: "bg-green-100 border-green-300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontWeight: 800 }} dir="rtl">
            למה ברייקדאנס?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            dir="rtl"
          >
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-2xl text-white shadow-xl">
              <p className="text-lg leading-relaxed">
                החוג מסייע בפיתוח חוש קצב, יכולת משחק, ביטחון עצמי ועמידה מול קהל, תוך חיזוק שרירי הגוף.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`${benefit.color} p-4 rounded-xl border-2 flex items-center gap-3 shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  {benefit.icon}
                  <span style={{ fontWeight: 600 }}>{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-orange-400 to-red-400 p-6 rounded-2xl text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed">
                הברייקדאנס תופס היום מקום מרכזי בתרבות ההיפ הופ, כמו שניתן לראות על במות של כל העולם, תחרויות בין להקות, הופעות, סרטי קולנוע כמו "סטפ אפ", וכו׳.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-purple-400 to-pink-400">
                <LazyImage
                  src="https://images.unsplash.com/photo-1443745029291-d5c27bc0b562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwZnJlZXplJTIwbW92ZXxlbnwxfHx8fDE3NTc4NTYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Breakdance freeze move"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ fontWeight: 700 }}
              >
                🔥 מגניב!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}