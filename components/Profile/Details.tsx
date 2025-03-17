'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from 'react-icons/fi';

interface DetailsProps {
  t: any;
}

export function Details({ t }: DetailsProps) {
  const details = [
    {
      ...t.details.phone,
      icon: <FiPhone className="text-[#4A6FA5] dark:text-gray-400" />,
    },
    {
      ...t.details.wechat,
      icon: <FiMessageSquare className="text-[#4A6FA5] dark:text-gray-400" />,
    },
    {
      ...t.details.address,
      icon: <FiMapPin className="text-[#4A6FA5] dark:text-gray-400" />,
    },
    {
      ...t.details.email,
      icon: <FiMail className="text-[#4A6FA5] dark:text-gray-400" />,
    },
  ];

  return (
    <section id="details" className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-[#0A2463] dark:text-gray-100 mb-8 relative"
      >
        {t.details.title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#4A6FA5] dark:bg-gray-400 rounded"></span>
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {details.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="flex flex-col p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#4A6FA5] dark:border-gray-600"
          >
            <div className="flex items-center mb-3">
              {item.icon}
              <dt className="text-[#4A6FA5] dark:text-gray-400 text-sm font-medium ml-2">
                {item.label}
              </dt>
            </div>
            <dd className="text-gray-700 dark:text-gray-300 font-medium break-words">
              {item.value}
            </dd>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
