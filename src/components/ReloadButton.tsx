import React, { FC } from 'react'
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../hooks/';

import Icon from 'react-native-vector-icons/MaterialIcons';

type ReloadButton = {
  onTouch: () => void;
}

export const ReloadButton: FC<ReloadButton> = ({onTouch}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    button: {
      borderRadius: 50,
      width: 50, height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });


  return (
    <View
      style={{
        position: 'absolute',
        right: 5,
        bottom:5
      }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={onTouch}
      >
        <Icon
          name='cached'
          size={28}
          color={colors.lightGray}
          style={{position: 'absolute'}}
        />
      </TouchableOpacity>
    </View>
  )
};
