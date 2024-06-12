import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoPlistReaderViewProps } from './ExpoPlistReader.types';

const NativeView: React.ComponentType<ExpoPlistReaderViewProps> =
  requireNativeViewManager('ExpoPlistReader');

export default function ExpoPlistReaderView(props: ExpoPlistReaderViewProps) {
  return <NativeView {...props} />;
}
