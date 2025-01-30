import { ThemeProvider } from 'next-themes';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';
import { Locale } from '../i18n/settings';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export default function LangLayout({ children, params }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700  z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <LanguageSelector />
            <Link
              href="https://yongjinhuang.github.io/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-gray-800 dark:text-gray-100 hover:text-blue-500 focus:outline-none transition-colors dark:hover:text-blue-500">
                blog
              </button>
            </Link>
            <ThemeToggle />
          </div>
        </nav>
        <main className="container mx-auto px-4 pt-24">{children}</main>
        <Footer params={params} />
      </div>
    </ThemeProvider>
  );
}
