import { StyleSheet, Text, View } from 'react-native';

import * as ExpoPlistReader from 'expo-plist-reader';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoPlistReader.hello()}</Text>
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
