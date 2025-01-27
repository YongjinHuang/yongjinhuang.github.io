'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/app/i18n/settings';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    // Get the current path segments
    const segments = pathname.split('/');

    // The first segment after split will be empty because pathname starts with "/"
    // The second segment (index 1) should be the current locale
    if (segments.length > 1) {
      segments[1] = locale;
    } else {
      segments.push(locale);
    }

    // Join the segments back together
    const newPath = segments.join('/') || `/${locale}`;

    // Navigate to the new path
    router.push(newPath);
    router.refresh(); // Force a refresh to update the content
  };

  return (
    <div className="flex space-x-4">
      {i18n.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className="text-sm font-medium hover:text-blue-500 transition-colors"
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
