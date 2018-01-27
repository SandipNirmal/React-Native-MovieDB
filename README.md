# LaLune App Clone using React Native

### Getting Started

#### Clone the app

```
git clone https://github.com/SandipNirmal/LaLuneiOSClone
```

#### Install Dependancies

```
npm i
```


#### Link Dependancies

``` JavaScript
react-native link react-native-orientation // link orientation

react-native link react-native-vector-icons // fonts

```
#### Run Application

```
react-native run-ios

npm start
```
#### Bundle Application for Device

``` JavaScript
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
```

#### For iOS

##### Modify AppDelegate.m

``` JavaScript
NSURL *jsCodeLocation;
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];

//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
```