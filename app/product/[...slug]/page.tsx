import Link from 'next/link';
import React from 'react';

type Props = {
  params: any;
};

const ProductPage = (props: Props) => {
  return (
    <div>
      ProductPage: {JSON.stringify(props.params)}
      <Link href="/product/this/is/a/slug?hello=afsdfs">This is a link</Link>
    </div>
  );
};

export default ProductPage;
