import React from 'react';

function Category() {
  const callouts = [
    {
      name: 'AWS',
      description: 'AWS Certified Solutions Architect - Associate',
      imageSrc:
        'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
      imageAlt: 'AWS Certified Solutions Architect - Associate',
      href: '/preview/aws',
    },
    {
      name: 'ADsP',
      description: '국가공인 데이터분석 준전문가',
      imageSrc:
        'https://velog.velcdn.com/images/zinu/post/8626b851-5212-48d9-80c5-2cd36c662089/image.jpg',
      imageAlt: '국가공인 데이터분석 준전문가',
      href: '/preview/adsp',
    },
    {
      name: '준비중',
      description: '준비중',
      imageSrc: '',
      imageAlt: '준비중입니다.',
      href: '/preview',
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-extrabold text-gray-900">
            카테고리 선택
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map(callout => (
              <div key={callout.name} className="group relative">
                <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
