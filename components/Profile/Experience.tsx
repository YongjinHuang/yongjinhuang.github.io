interface CompanyExperience {
  name: string;
  position: string;
  period: string;
  project?: string;
  responsibilities: string[];
}

interface ExperienceProps {
  t: any; // Replace with proper type from your i18n setup
}

const CompanyCard = ({ experience }: { experience: CompanyExperience }) => (
  <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
    <h3 className="text-xl font-semibold">{experience.name}</h3>
    <p className="text-gray-600 dark:text-gray-400">{experience.position}</p>
    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
      {experience.period}
    </p>
    {experience.project && (
      <p className="text-md text-gray-600 dark:text-gray-400 mb-2">
        {experience.project}
      </p>
    )}
    <ul className="list-disc list-inside space-y-2">
      {experience.responsibilities.map(
        (responsibility: string, index: number) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {responsibility}
          </li>
        )
      )}
    </ul>
  </div>
);

export function Experience({ t }: ExperienceProps) {
  const experiences: CompanyExperience[] = [
    {
      name: t.experience.company.wonders.name,
      position: t.experience.company.wonders.position,
      period: t.experience.company.wonders.period,
      responsibilities: t.experience.company.wonders.responsibilities,
    },
    {
      name: t.experience.company.shopee.name,
      position: t.experience.company.shopee.position,
      period: t.experience.company.shopee.period,
      project: t.experience.company.shopee.project,
      responsibilities: t.experience.company.shopee.responsibilities,
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">{t.experience.title}</h2>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <CompanyCard key={experience.name} experience={experience} />
        ))}
      </div>
    </section>
  );
}
