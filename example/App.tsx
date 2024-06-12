import { StyleSheet, Text, View } from 'react-native';

import * as ExpoPlistReader from 'expo-plist-reader';
import * as FS from 'expo-file-system';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset'

const secret = require('./assets/secret.plist')

export default function App() {
  const [content, setContent] = useState('')

  const init = async () => {
    const secretFileAsset = await Asset.fromModule(secret).downloadAsync()

    if (secretFileAsset?.localUri) {
      //  validate file is there
      const info = await FS.getInfoAsync(secretFileAsset.localUri)

      if (info.exists) {
        console.log('info', info);
        
        // read file
        // the path should be relative to app library folder
        // must not include the file URI
        const filePath = info.uri.substring(info.uri.indexOf('/Caches'))
        
        const content = await ExpoPlistReader.readFile(filePath)

        setContent(JSON.stringify(content, null, 2))
        
      }
    }
  }

  useEffect(() => {
    init()
  }, [])
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
      {/* <Text>{ExpoPlistReader.readFile()}</Text> */}
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
