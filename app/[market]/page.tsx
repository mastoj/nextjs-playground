import Link from 'next/link';
import React from 'react';

type Props = {};

const MarketPage = (props: Props) => {
  return (
    <div>
      MarketPage
      <Link href="/mw/product/this/is/a/slug">Hello, click me!</Link>
    </div>
  );
};

export default MarketPage;
