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
      },
    },
  );
  const data = await response.json();
  console.log('==> data: ', data);
  return data;
};

const DataCacheExample = async ({ params }: Props) => {
  const timezoneString = params.timezone.join('/');

  console.log('==> timezoneString: ', timezoneString);
  const timeData = await getData(timezoneString);
  return <div>DataCacheExample: {JSON.stringify(timeData, null, 2)}</div>;
};

export default DataCacheExample;
