import { ThemeProvider } from 'next-themes';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';
import { Locale } from '../i18n/settings';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ScrollToTop } from '@/components/ScrollToTop';
interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export default function LangLayout({ children, params }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="font-bold text-[#0A2463] dark:text-white text-xl hover:text-[#4A6FA5] dark:hover:text-blue-400 transition-colors"
              >
                YJ
              </Link>
              <LanguageSelector />
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="https://yongjinhuang.github.io/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <span className="text-gray-800 dark:text-gray-100 font-medium hover:text-[#4A6FA5] dark:hover:text-blue-400 transition-colors">
                  Blog
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4A6FA5] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#experience"
                className="relative group hidden sm:block"
              >
                <span className="text-gray-800 dark:text-gray-100 font-medium hover:text-[#4A6FA5] dark:hover:text-blue-400 transition-colors">
                  Experience
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4A6FA5] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 pt-24">{children}</main>
        <Footer params={params} />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
