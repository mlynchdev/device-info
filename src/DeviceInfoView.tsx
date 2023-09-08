import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { DeviceInfoViewProps } from './DeviceInfo.types';

const NativeView: React.ComponentType<DeviceInfoViewProps> =
  requireNativeViewManager('DeviceInfo');

export default function DeviceInfoView(props: DeviceInfoViewProps) {
  return <NativeView {...props} />;
}
