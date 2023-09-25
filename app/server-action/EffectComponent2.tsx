'use client';
import React, { useEffect, useState } from 'react';

type Props = {
  action: (id: string) => Promise<string>;
  intervalMs: number;
  id: string;
};

const EffectComponent2 = ({ action, intervalMs, id }: Props) => {
  const [data, setData] = useState('');
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await action(id);
      setData(data);
    }, intervalMs);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>EffectComponent2: {data}</div>;
};

export default EffectComponent2;
