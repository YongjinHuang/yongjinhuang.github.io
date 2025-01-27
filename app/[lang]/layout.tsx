import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { Locale } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // Await the entire params object first
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
