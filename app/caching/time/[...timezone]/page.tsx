import { revalidatePath, revalidateTag } from 'next/cache';
import React from 'react';

type Props = {
  params: {
    timezone: string[];
  };
};

const getData = async (timezoneString: string) => {
  const response = await fetch(
    `http://worldtimeapi.org/api/timezone/${timezoneString}`,
    {
      next: {
        revalidate: 3600,
        tags: ['timezone'],
      },
    },
  );
  const data = await response.json();
  console.log('==> data: ', data);
  return data;
};

export const dynamic = 'force-dynamic';

const DataCacheExample = async ({ params }: Props) => {
  const timezoneString = params.timezone.join('/');

  console.log('==> timezoneString: ', timezoneString);
  const timeData = await getData(timezoneString);

  const clearCache = async () => {
    'use server';
    revalidateTag('timezone');
    revalidatePath('/caching/time' + timezoneString);
  };
  return (
    <div>
      DataCacheExample, this is a new deploy. Old utc time
      2024-01-05T10:09:11.386182+00:00 {JSON.stringify(timeData, null, 2)}
      <form action={clearCache}>
        <button type="submit">Clear Cache</button>
      </form>
    </div>
  );
};

export default DataCacheExample;
