import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to DeviceInfo.web.ts
// and on native platforms to DeviceInfo.ts
import DeviceInfoModule from './DeviceInfoModule';
import DeviceInfoView from './DeviceInfoView';
import { ChangeEventPayload, DeviceInfoViewProps } from './DeviceInfo.types';

// Get the native constant value.
export const PI = DeviceInfoModule.PI;

export function hello(): string {
  return DeviceInfoModule.hello();
}

export async function setValueAsync(value: string) {
  return await DeviceInfoModule.setValueAsync(value);
}

const emitter = new EventEmitter(DeviceInfoModule ?? NativeModulesProxy.DeviceInfo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { DeviceInfoView, DeviceInfoViewProps, ChangeEventPayload };
