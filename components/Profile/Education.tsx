interface EducationProps {
  t: any;
}

export function Education({ t }: EducationProps) {
  return (
    <section id="education">
      <h2 className="text-2xl font-bold text-[#0A2463] dark:text-gray-100 mb-6">
        {t.education.title}
      </h2>
      <div className="space-y-2">
        <h3 className="text-[#4A6FA5] dark:text-gray-400 text-lg font-medium">
          {t.education.university}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{t.education.major}</p>
        <span className="text-gray-500 dark:text-gray-400">
          {t.education.period}
        </span>
      </div>
    </section>
  );
}
