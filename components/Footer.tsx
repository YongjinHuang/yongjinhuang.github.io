interface FooterProps {
  t: any;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-6 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
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
