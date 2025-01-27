import Link from 'next/link';
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
        className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        download
      >
        <FaDownload className="mr-2" /> {/* Icon next to the text */}
        {resumePrompt}
      </Link>
    </section>
  );
}
