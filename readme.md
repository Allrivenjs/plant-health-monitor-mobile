# Plant health monitor mobile

### Run project

First, run the react native bundler

```
yarn start
```

Then, run the app on android and open the emulator

```
yarn android
```

### Build apk

To build the release apk for android, first you have to create a key.

```
keytool -genkey -v -keystore phm-mobile.keystore -alias phm-mobile -keyalg RSA -keysize 2048 -validity 10000
```

Make sure the key is store in the folder

```
mv phm-mobile.keystore ./android/app/phm-mobile.keystore
```

Add the key in the ./android/app/build.gradle file.

Then, finally, run the gradlew builder

```
cd ./android/app && ./gradlew assambleRelease
```

The output apk is going to be located in ./android/app/build/outputs/apk/release

### Other commands

Delete app from the device completly. make sure you have the device connected in debug mode

```
adb uninstall com.planthealthmonitorapp
```

To build debug apk run the following command:

```
cd ./android/app && ./gradlew assambleDebug
```
