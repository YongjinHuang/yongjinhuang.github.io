interface IntroProps {
  title: string;
  introduction: string;
}

export function Intro({ title, introduction }: IntroProps) {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0A2463] dark:text-gray-100">
        {title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {introduction}
      </p>
    </section>
  );
}
