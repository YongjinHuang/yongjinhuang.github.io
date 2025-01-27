import { Locale } from '@/app/i18n/settings';
import { getTranslations } from '../i18n/settings';
import { Skills } from '@/components/Profile/Skills';
import { Experience } from '@/components/Profile/Experience';
import { Details } from '@/components/Profile/Details';
import { Footer } from '@/components/Footer';
import { Intro } from '@/components/Profile/Intro';
import { Education } from '@/components/Profile/Education';

interface Props {
  params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      {/* Profile Section */}
      <Intro
        resumeFile={t.intro.resumeFile}
        resumePrompt={t.intro.resumePrompt}
        title={t.intro.title}
        introduction={t.intro.introduction}
      />

      {/* Details Section */}
      <Details t={t} />

      {/* Skills and Education Section in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Education t={t} />
        <Skills t={t} />
      </div>

      {/* Experience Section */}
      <Experience t={t} />

      {/* Footer Section */}
      <Footer t={t} />
    </div>
  );
}
