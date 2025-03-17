'use client';

import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLayerGroup } from 'react-icons/fa';

interface SkillsProps {
  t: any;
}

export function Skills({ t }: SkillsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-6" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-[#0A2463] dark:text-gray-100 mb-8 relative"
      >
        {t.skills.title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#4A6FA5] dark:bg-gray-400 rounded"></span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="space-y-4"
      >
        <motion.div
          variants={item}
          className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center mb-3">
            <div className="bg-[#4A6FA5] dark:bg-gray-700 p-2 rounded-full mr-3">
              <FaCode className="text-white" />
            </div>
            <h3 className="text-[#4A6FA5] dark:text-gray-300 font-bold">
              {t.skills.languages.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {t.skills.languages.value.map((lang: string, index: number) => (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={lang}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-[#4A6FA5] hover:text-white dark:hover:bg-[#4A6FA5]"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center mb-3">
            <div className="bg-[#4A6FA5] dark:bg-gray-700 p-2 rounded-full mr-3">
              <FaLayerGroup className="text-white" />
            </div>
            <h3 className="text-[#4A6FA5] dark:text-gray-300 font-bold">
              {t.skills.frameworks.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {t.skills.frameworks.value.map(
              (framework: string, index: number) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={framework}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-[#4A6FA5] hover:text-white dark:hover:bg-[#4A6FA5]"
                >
                  {framework}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center mb-3">
            <div className="bg-[#4A6FA5] dark:bg-gray-700 p-2 rounded-full mr-3">
              <FaTools className="text-white" />
            </div>
            <h3 className="text-[#4A6FA5] dark:text-gray-300 font-bold">
              {t.skills.tools.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {t.skills.tools.value.map((tool: string, index: number) => (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={tool}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-[#4A6FA5] hover:text-white dark:hover:bg-[#4A6FA5]"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
