interface ProfileHeaderProps {
  t: any;
}

export function ProfileHeader({ t }: ProfileHeaderProps) {
  return (
    <header className="space-y-4">
      <h1 className="text-5xl font-bold text-[#0A2463]">{t.title}</h1>
      <h2 className="text-xl text-[#4A6FA5]">{t.title}</h2>
      <p className="text-gray-600 max-w-2xl leading-relaxed">
        {t.profile.introduction}
      </p>
    </header>
  );
}
