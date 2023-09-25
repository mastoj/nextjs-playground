import React from 'react';
import EffectComponent2 from '../../EffectComponent2';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return [
    {
      id: 'tomas',
    },
  ];
}
const page = async ({ params }: Props) => {
  const { id } = params;
  console.log('==> id: ', id);
  const getData = async (id: string) => {
    'use server';
    console.log('Action id: ', id);
    return new Promise<string>((resolve, reject) => {
      const random = Math.random();
      resolve(`${id}: ${random.toString()}`);
    });
  };

  return (
    <div>
      <EffectComponent2 action={getData} intervalMs={5000} id={id} />
    </div>
  );
};

export default page;
