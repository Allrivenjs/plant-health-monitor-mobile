# Plant health monitor mobile

### run project

first, run the react native bundler

```
yarn start
```

then, run the app on android and open the emulator

```
yarn android
```

### build apk

to build the release apk for android

keytool -genkey -v -keystore phm.keystore -alias phm -keyalg RSA -keysize 2048 -validity 10000

### other commands

delete app from the device completly. make shure you have the device connected in debug mode

```
adb uninstall com.planthealthmonitorapp
```
