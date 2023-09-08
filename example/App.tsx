import { StyleSheet, Text, View } from 'react-native';

import * as DeviceInfo from 'device-info';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{DeviceInfo.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
