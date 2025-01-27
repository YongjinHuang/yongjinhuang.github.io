interface DetailsProps {
  t: any;
}

export function Details({ t }: DetailsProps) {
  const details = [
    t.details.phone,
    t.details.wechat,
    t.details.address,
    t.details.email,
  ];

  return (
    <section id="details">
      <h2 className="text-2xl font-bold text-[#0A2463] dark:text-gray-100 mb-6">
        {t.details.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {details.map((item, index) => (
          <div key={index} className="flex flex-col">
            <dt className="text-[#4A6FA5] dark:text-gray-400 text-sm font-medium">
              {item.label}
            </dt>
            <dd className="text-gray-700 dark:text-gray-300 mt-1">
              {item.value}
            </dd>
          </div>
        ))}
      </div>
    </section>
  );
}
