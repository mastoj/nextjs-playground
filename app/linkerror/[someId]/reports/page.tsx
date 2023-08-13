import Link from 'next/link';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      This should link to the correct place:{' '}
      <Link href="./anything">CLICK ME</Link>
    </div>
  );
};

export default page;
