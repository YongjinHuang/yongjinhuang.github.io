'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa'; // Import an icon from react-icons

interface IntroProps {
  title: string;
  introduction: string;
  resumeFile: string;
  resumePrompt: string;
}

export function Intro({
  resumeFile,
  resumePrompt,
  title,
  introduction,
}: IntroProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0A2463] dark:text-gray-100">
        {title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {introduction}
      </p>
      <Link
        href={resumeFile}
        className={`inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg transition duration-300 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:bg-blue-700 hover:scale-105`}
        download
      >
        <FaDownload className="mr-2" /> {/* Icon next to the text */}
        {resumePrompt}
      </Link>
    </section>
  );
}
