'use client';
import React, { useEffect, useState } from 'react';

type Props = {
  action: () => Promise<string>;
  intervalMs: number;
};

const EffectComponent = ({ action, intervalMs }: Props) => {
  const [data, setData] = useState('');
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await action();
      setData(data);
    }, intervalMs);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>EffectComponent: {data}</div>;
};

export default EffectComponent;
