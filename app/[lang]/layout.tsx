import { ThemeProvider } from 'next-themes';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';

interface Props {
  children: React.ReactNode;
}

export default async function LangLayout({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </nav>
        <main className="container mx-auto px-4 pt-24">{children}</main>
      </div>
    </ThemeProvider>
  );
}
