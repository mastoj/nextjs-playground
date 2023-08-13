import React from 'react';

type Props = {
  params: {
    someId: string;
    someOtherId: string;
  };
};

const page = (props: Props) => {
  const propsJsonString = JSON.stringify(props, null, 2);
  console.log('propsJsonString: ', propsJsonString);
  return <div>HELLO: {propsJsonString}</div>;
};

export default page;
