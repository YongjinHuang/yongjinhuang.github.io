interface ProfileDetailsProps {
  t: any; // Replace with proper type from your i18n setup
}

export function ProfileDetails({ t }: ProfileDetailsProps) {
  const ContactItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      <span className="font-medium text-gray-700 dark:text-gray-300 min-w-[100px]">
        {label}:
      </span>
      <span className="text-gray-600 dark:text-gray-400">{value}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">
          {t.profile.contact.title}
        </h2>
        <div className="space-y-3">
          <ContactItem
            label={t.profile.contact.address.label}
            value={t.profile.contact.address.value}
          />
          <ContactItem
            label={t.profile.contact.phone.label}
            value={t.profile.contact.phone.value}
          />
          <ContactItem
            label={t.profile.contact.wechat.label}
            value={t.profile.contact.wechat.value}
          />
        </div>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">
          {t.profile.education.title}
        </h2>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">
            {t.profile.education.university}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t.profile.education.major}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {t.profile.education.period}
          </p>
        </div>
      </div>
    </div>
  );
}
