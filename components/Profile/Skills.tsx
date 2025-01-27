interface SkillsProps {
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  t: any;
}

export function Skills({ skills, t }: SkillsProps) {
  return (
    <section className="space-y-6" id="skills">
      <h2 className="text-2xl font-bold text-[#0A2463] dark:text-gray-100">
        {t.skills.title}
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-[#4A6FA5] dark:text-gray-400 text-sm font-medium mb-2">
            {t.skills.languages}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[#4A6FA5] dark:text-gray-400 text-sm font-medium mb-2">
            {t.skills.frameworks}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((framework) => (
              <span
                key={framework}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[#4A6FA5] dark:text-gray-400 text-sm font-medium mb-2">
            {t.skills.tools}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
