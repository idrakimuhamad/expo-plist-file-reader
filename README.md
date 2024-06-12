# expo-plist-file-reader

Module to read plist (or bplist) in react-native.

This is iOS only module, so always check if you are running on iOS before using it.

This is useful if you need to read NSUserDefaults or any other plist file in your iOS app, that may be created but other library or native code, that you may want to read in your react-native app, and make use of it.

Currently, it only supports reading the file, and not writing to it, and the path must be relative to the application library directory, without the URI scheme, as it always assume the root would be from the Library directory.

### Add the package to your npm dependencies

```
npm install expo-plist-file-reader

or

npx expo install expo-plist-file-reader

or

yarn add expo-plist-file-reader
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.

### Usage

```ts
import { readFile } from 'expo-plist-file-reader';

function App() {
    const parseFile = async () => {
        // the path must be relative to the application
        // library directory, without the URI scheme
        // as it always assume the root would be from the Library directory
        const file = await readFile('path/to/file.plist');
    } 
}
```

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
