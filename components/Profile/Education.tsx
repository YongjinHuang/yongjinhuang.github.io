'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

interface EducationProps {
  t: any;
}

export function Education({ t }: EducationProps) {
  return (
    <section id="education" className="py-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-[#0A2463] dark:text-gray-100 mb-8 relative"
      >
        {t.education.title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#4A6FA5] dark:bg-gray-400 rounded"></span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#4A6FA5] dark:border-gray-600"
      >
        <div className="flex items-start">
          <div className="bg-[#4A6FA5] dark:bg-gray-700 p-3 rounded-full mr-4">
            <FaGraduationCap className="text-white text-xl" />
          </div>

          <div className="space-y-3">
            <h3 className="text-[#4A6FA5] dark:text-gray-300 text-xl font-bold">
              {t.education.university}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {t.education.major}
            </p>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <FaCalendarAlt className="mr-2" />
              <span>{t.education.period}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
