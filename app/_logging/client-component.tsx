'use client';
import React from 'react';
import { logger } from './logger';

type Props = {};

const ClientComponent = (props: Props) => {
  logger.info('ClientComponent');
  return <div>ClientComponent</div>;
};

export default ClientComponent;
