import React, { PropsWithChildren, Suspense } from 'react';

const ProductLayout = ({
  children,
  subscription,
}: PropsWithChildren<{ subscription: React.ReactNode }>) => {
  return (
    <div>
      ProductLayout
      {children}
      <Suspense>{subscription}</Suspense>
    </div>
  );
};

export default ProductLayout;
