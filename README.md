#CISystem
> Smart client system. for practice based on the react-native mobile app development.

### How to ?
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Run](#run)

### Getting Started
- [en](https://facebook.github.io/react-native/docs/getting-started.html)
- [cn-zh](http://reactnative.cn/docs/0.27/getting-started.html)

### Installation
```bash
npm install
```

### Run
```bash
react-native run-android

```

### Generating Release
```bash
# build android APK
cd android && ./gradlew assembleRelease

# build index.android.bundle.js
react-native bundle  — platform android --entry-file index.android.js --bundle-output ./bundles/index.android.bundle --dev false

# release index.android.bundle.js
code-push release CISystem ./bundles 1.0.0 --mandatory true

# update index.android.bundle.js
code-push patch CISystem Staging -l v6 --des "update description"
```

### Screens

| Platform| Home | My | Search |
| :------:| :-------: | :----: | :---: |
| iOS | ![Home]() | ![My]() | ![Search]() |
| Android | ![Home](https://raw.githubusercontent.com/xpcode/CISystem/master/js/_screenshot/home.png) | ![Profile](https://raw.githubusercontent.com/xpcode/CISystem/master/js/_screenshot/my.png) | ![Profile](https://raw.githubusercontent.com/xpcode/CISystem/master/js/_screenshot/searchByName.png) |


### Resources
- [react-native](https://facebook.github.io/react-native) 
- [redux](https://github.com/reactjs/redux)
- [immutable](http://facebook.github.io/immutable-js)
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [code-push](https://github.com/Microsoft/react-native-code-push)
- [Generating Signed APK](https://facebook.github.io/react-native/docs/signed-apk-android.html)
