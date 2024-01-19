import React from 'react';

type Props = {
  params: any;
};

const ProductPage = (props: Props) => {
  return <div>ProductPage: {JSON.stringify(props.params)}</div>;
};

export default ProductPage;
