import * as React from 'react';

import { DeviceInfoViewProps } from './DeviceInfo.types';

export default function DeviceInfoView(props: DeviceInfoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
