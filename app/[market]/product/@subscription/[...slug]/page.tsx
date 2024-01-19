import React from 'react';

type Props = {
  params: any;
};

const SubscriptionPage = (props: Props) => {
  return <div>SubscriptionPage: {JSON.stringify(props.params)}</div>;
};

export default SubscriptionPage;
