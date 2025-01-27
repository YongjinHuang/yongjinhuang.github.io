interface SkillsProps {
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  t: any; // Replace with proper type from your i18n setup
}

export function Skills({ skills, t }: SkillsProps) {
  const SkillList = ({ items, title }: { items: string[]; title: string }) => (
    <div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((skill) => (
          <li key={skill} className="flex items-center space-x-2">
            <span>•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{t.profile.skills}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillList items={skills.languages} title={t.skills.languages} />
        <SkillList items={skills.frameworks} title={t.skills.frameworks} />
        <SkillList items={skills.tools} title={t.skills.tools} />
      </div>
    </div>
  );
}
