import * as React from 'react';

import { ExpoPlistReaderViewProps } from './ExpoPlistReader.types';

export default function ExpoPlistReaderView(props: ExpoPlistReaderViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
