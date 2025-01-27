import { Locale } from "@/app/i18n/settings";
import { getTranslations } from "../i18n/settings";
import { Skills } from "@/components/Profile/Skills";
import { Experience } from "@/components/Profile/Experience";

const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  frameworks: ["React", "Next.js", "Spring Boot", "Django"],
  tools: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"],
};

interface Props {
  params: { lang: Locale };
}

export default async function Home({ params: { lang } }: Props) {
  const t = await getTranslations(lang); // Use the dynamic language parameter

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Profile Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">{t.profile.title}</h1>
        <p className="text-lg leading-relaxed">{t.profile.introduction}</p>
        <Skills skills={skills} t={t} />
      </section>

      {/* Experience Section */}
      <Experience t={t} />
    </div>
  );
}
