/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ResponsivePieCanvas } from '@nivo/pie';

function Ready() {
  const data = [
    {
      id: 'scala',
      label: 'scala',
      value: 95,
      color: 'hsl(230, 70%, 50%)',
    },
    {
      id: 'elixir',
      label: 'elixir',
      value: 544,
      color: 'hsl(283, 70%, 50%)',
    },
    {
      id: 'php',
      label: 'php',
      value: 385,
      color: 'hsl(344, 70%, 50%)',
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 435,
      color: 'hsl(337, 70%, 50%)',
    },
    {
      id: 'make',
      label: 'make',
      value: 10,
      color: 'hsl(329, 70%, 50%)',
    },
    {
      id: 'css',
      label: 'css',
      value: 322,
      color: 'hsl(287, 70%, 50%)',
    },
    {
      id: 'go',
      label: 'go',
      value: 313,
      color: 'hsl(231, 70%, 50%)',
    },
    {
      id: 'hack',
      label: 'hack',
      value: 400,
      color: 'hsl(127, 70%, 50%)',
    },
    {
      id: 'python',
      label: 'python',
      value: 121,
      color: 'hsl(156, 70%, 50%)',
    },
    {
      id: 'sass',
      label: 'sass',
      value: 476,
      color: 'hsl(75, 70%, 50%)',
    },
    {
      id: 'lisp',
      label: 'lisp',
      value: 124,
      color: 'hsl(55, 70%, 50%)',
    },
    {
      id: 'ruby',
      label: 'ruby',
      value: 19,
      color: 'hsl(234, 70%, 50%)',
    },
    {
      id: 'c',
      label: 'c',
      value: 396,
      color: 'hsl(101, 70%, 50%)',
    },
    {
      id: 'haskell',
      label: 'haskell',
      value: 25,
      color: 'hsl(81, 70%, 50%)',
    },
    {
      id: 'erlang',
      label: 'erlang',
      value: 539,
      color: 'hsl(72, 70%, 50%)',
    },
    {
      id: 'stylus',
      label: 'stylus',
      value: 365,
      color: 'hsl(42, 70%, 50%)',
    },
    {
      id: 'rust',
      label: 'rust',
      value: 596,
      color: 'hsl(337, 70%, 50%)',
    },
    {
      id: 'java',
      label: 'java',
      value: 313,
      color: 'hsl(28, 70%, 50%)',
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">테스트를 시작할까요?</span>
          <span className="block text-indigo-600">
            테스트 시작 버튼을 클릭하세요.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="category"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              테스트 시작
            </a>
          </div>
        </div>
      </div>
      <div className="h-4/6 w-full">
        <ResponsivePieCanvas
          data={data}
          margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: 'paired' }}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.6]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="#333333"
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'ruby',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'c',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'go',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'python',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'scala',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'lisp',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'elixir',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'javascript',
              },
              id: 'lines',
            },
          ]}
          legends={[
            {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 140,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 60,
              itemHeight: 14,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 14,
              symbolShape: 'circle',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Ready;
