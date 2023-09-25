import React from 'react';
import EffectComponent from './EffectComponent';

type Props = {};

const page = async (props: Props) => {
  const getData = async () => {
    'use server';
    return new Promise<string>((resolve, reject) => {
      const random = Math.random();
      resolve(random.toString());
    });
  };

  return (
    <div>
      <EffectComponent action={getData} intervalMs={1000} />
    </div>
  );
};

export default page;
