'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <section id="intro" className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0A2463] dark:text-gray-100">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <Image
          src="/selfie.png"
          alt="Profile"
          width={300}
          height={300}
          className="mb-4 md:mb-0 rounded-full"
        />
        <div className="flex flex-col justify-between">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {introduction}
          </p>
          <Link
            href={resumeFile}
            className={`mt-4 inline-flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg transition duration-300 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:bg-blue-700 hover:scale-105`}
            download
          >
            <FaDownload className="mr-2" /> {/* Icon next to the text */}
            {resumePrompt}
          </Link>
        </div>
      </div>
    </section>
  );
}
