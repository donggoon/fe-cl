import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Category() {
  const [categories, setCategories] = useState([
    {
      id: '1',
      name: 'AWS',
      p_id: '0',
      question_cnt: '100',
      success_cnt: '80',
      url: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
    },
    {
      id: '2',
      name: 'ADsP',
      p_id: '0',
      question_cnt: '50',
      success_cnt: '40',
      url: 'https://velog.velcdn.com/images/zinu/post/8626b851-5212-48d9-80c5-2cd36c662089/image.jpg',
    },
  ]);

  const injectUrl = data => {
    return data.map(row => {
      if (row.id === 3) {
        return {
          ...row,
          url: 'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
        };
      }
      if (row.id === 4) {
        return {
          ...row,
          url: 'https://velog.velcdn.com/images/zinu/post/8626b851-5212-48d9-80c5-2cd36c662089/image.jpg',
        };
      }
      return row;
    });
  };

  useEffect(() => {
    axios
      .get('http://3.37.139.180:9002/api/q/category')
      .then(data => {
        console.log(data);
        setCategories(injectUrl(data.data));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // const callouts = [
  //   {
  //     name: 'AWS',
  //     description: 'AWS Certified Solutions Architect - Associate',
  //     imageSrc:
  //       'https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png',
  //     imageAlt: 'AWS Certified Solutions Architect - Associate',
  //     href: '/preview/aws',
  //   },
  //   {
  //     name: 'ADsP',
  //     description: '국가공인 데이터분석 준전문가',
  //     imageSrc:
  //       'https://velog.velcdn.com/images/zinu/post/8626b851-5212-48d9-80c5-2cd36c662089/image.jpg',
  //     imageAlt: '국가공인 데이터분석 준전문가',
  //     href: '/preview/adsp',
  //   },
  //   {
  //     name: '준비중',
  //     description: '준비중',
  //     imageSrc: '',
  //     imageAlt: '준비중입니다.',
  //     href: '/preview',
  //   },
  // ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-extrabold text-gray-900">
            카테고리 선택
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories.map(category => (
              <div key={category.id} className="group relative">
                <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                  <img
                    src={category.url}
                    alt="준비중입니다"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={`/preview/${category.id}`}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {`총 ${category.question_cnt} 문항 중 ${category.success_cnt} 문항 정답`}
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
