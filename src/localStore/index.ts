import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLocalValue = async (key: string, value: string) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(`Error trying to save ${key} value`);
    return '';
  }
};

export const getLocalValue = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(`Error trying to get ${key} value`);
    return '';
  }
};
