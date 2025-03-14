import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

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
    <section id="experience">
      <h2 className="text-2xl font-bold text-[#0A2463] dark:text-gray-100 mb-8">
        {t.experience.title}
      </h2>
      <div className="relative border-l-2 border-[#4A6FA5] dark:border-gray-600 ml-4 space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-[#4A6FA5] dark:bg-gray-500" />
            <div className="ml-6 flex items-start">
              <Image
                width={32}
                height={32}
                src={experience.logoUrl}
                alt={`${experience.name} logo`}
                className="h-9 w-9 mr-2 rounded-full"
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2463] dark:text-gray-100">
                      <a
                        href={experience.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {experience.name}
                      </a>
                    </h3>
                    <p className="text-[#4A6FA5] dark:text-gray-400 font-medium">
                      {experience.position}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.period}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.techStack}
                    </span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {experience.responsibilities.map(
                    (responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-gray-600 dark:text-gray-300 before:content-['•'] before:mr-2 before:text-[#4A6FA5] dark:before:text-gray-500"
                      >
                        <ReactMarkdown
                          components={{
                            p: ({ ...props }) => <span {...props} />,
                            a: ({ ...props }) => (
                              <a
                                {...props}
                                style={{ color: '#4A6FA5' }}
                                target="_blank"
                                rel="noopener noreferrer"
                              />
                            ),
                          }}
                        >
                          {responsibility}
                        </ReactMarkdown>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
