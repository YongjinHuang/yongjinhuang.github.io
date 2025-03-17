'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

interface IntroProps {
  title: string;
  introduction: string;
  resumeFile: string;
  resumePrompt: string;
  links: LinksProp;
}
interface LinksProp {
  github: string;
  linkedin: string;
  leetcode: string;
}

export function Intro({
  resumeFile,
  resumePrompt,
  title,
  introduction,
  links,
}: IntroProps) {
  return (
    <section id="intro" className="py-12">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 md:mb-0 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md opacity-20 animate-pulse"></div>
          <Image
            src="/selfie.png"
            alt="Profile"
            width={300}
            height={300}
            className="relative rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-[#0A2463] dark:text-gray-100 relative"
          >
            {title}
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-500 rounded"></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
          >
            {introduction}
          </motion.p>

          <div className="flex space-x-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <SiLeetcode size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href={resumeFile}
              className="mt-4 inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-xl"
              download
            >
              <FaDownload className="mr-2" />
              {resumePrompt}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
