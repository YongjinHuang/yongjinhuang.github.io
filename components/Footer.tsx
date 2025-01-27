import { getTranslations } from '@/app/i18n/settings';

import { Locale } from '@/app/i18n/settings';

interface FooterProps {
  params: Promise<{ lang: Locale }>;
}

export async function Footer({ params }: FooterProps) {
  const { lang } = await params;
  const t = await getTranslations(lang);
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-6 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t.footer.name}. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href={t.footer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href={t.footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={t.footer.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Leetcode
          </a>
        </div>
      </div>
    </footer>
  );
}
