import React from 'react';
import { logger } from './logger';
import ClientComponent from './client-component';

type Props = {};

const LoggingPage = (props: Props) => {
  logger.info('LoggingPage');
  return (
    <div>
      <ClientComponent /> and hello
    </div>
  );
};

export default LoggingPage;
