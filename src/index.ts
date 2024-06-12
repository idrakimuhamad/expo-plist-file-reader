import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoPlistReader.web.ts
// and on native platforms to ExpoPlistReader.ts
import ExpoPlistReaderModule from './ExpoPlistReaderModule';
import ExpoPlistReaderView from './ExpoPlistReaderView';
import { ChangeEventPayload, ExpoPlistReaderViewProps } from './ExpoPlistReader.types';

// Get the native constant value.
export const PI = ExpoPlistReaderModule.PI;

export function hello(): string {
  return ExpoPlistReaderModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoPlistReaderModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoPlistReaderModule ?? NativeModulesProxy.ExpoPlistReader);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoPlistReaderView, ExpoPlistReaderViewProps, ChangeEventPayload };
