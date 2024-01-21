import React from 'react';

type Props = {
  params: any;
  searchParams: any;
};

const SubscriptionPage = ({ searchParams, params }: Props) => {
  return (
    <>
      <div>SubscriptionPage params: {JSON.stringify(params)}</div>
      <div>
        SubscriptionPage searchParams: {JSON.stringify(searchParams)}
        {searchParams.hello && (
          <dialog open>hello: {searchParams.hello}</dialog>
        )}
      </div>
    </>
  );
};

export default SubscriptionPage;
