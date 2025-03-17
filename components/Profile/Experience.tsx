'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface CompanyExperience {
  name: string;
  position: string;
  period: string;
  techStack: string;
  project?: string;
  responsibilities: string[];
  logoUrl: string;
  linkUrl: string;
}

interface ExperienceProps {
  t: any;
}

export function Experience({ t }: ExperienceProps) {
  const experiences: CompanyExperience[] = [
    t.experience.company.wilddata,
    t.experience.company.tarro,
    t.experience.company.shopee,
    t.experience.company.huawei,
  ];

  return (
    <section id="experience" className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-[#0A2463] dark:text-gray-100 mb-12 relative"
      >
        {t.experience.title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#4A6FA5] dark:bg-gray-400 rounded"></span>
      </motion.h2>
      <div className="relative border-l-2 border-[#4A6FA5] dark:border-gray-600 ml-4 space-y-16">
        {experiences.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="relative"
          >
            <div
              className="absolute -left-[9px] h-4 w-4 rounded-full bg-[#4A6FA5] dark:bg-gray-500 
              transition-all duration-300 hover:scale-150 hover:bg-[#0A2463]"
            />
            <div
              className="ml-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
              hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="relative group">
                  <Image
                    width={48}
                    height={48}
                    src={experience.logoUrl}
                    alt={`${experience.name} logo`}
                    className="h-12 w-12 mr-4 rounded-full transition-all duration-300 
                      group-hover:scale-110"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A2463] dark:text-gray-100">
                        <a
                          href={experience.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-[#4A6FA5] transition-colors duration-300"
                        >
                          {experience.name}
                        </a>
                      </h3>
                      <p className="text-[#4A6FA5] dark:text-gray-400 font-medium mt-1">
                        {experience.position}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className="text-sm font-medium text-gray-500 dark:text-gray-400 
                        bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                      >
                        {experience.period}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {experience.techStack}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {experience.responsibilities.map(
                      (responsibility, respIndex) => (
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                          key={respIndex}
                          className="text-gray-600 dark:text-gray-300 before:content-['•'] 
                          before:mr-2 before:text-[#4A6FA5] dark:before:text-gray-500
                          hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg
                          transition-colors duration-300"
                        >
                          <ReactMarkdown
                            components={{
                              p: ({ ...props }) => <span {...props} />,
                              a: ({ ...props }) => (
                                <a
                                  {...props}
                                  className="text-[#4A6FA5] hover:text-[#0A2463] 
                                  transition-colors duration-300"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                />
                              ),
                            }}
                          >
                            {responsibility}
                          </ReactMarkdown>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
