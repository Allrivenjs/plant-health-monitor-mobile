import {FC} from 'react';

import {StyleSheet, View, ViewStyle, Text} from 'react-native';

import {Slider} from '@miblanchard/react-native-slider';

import {useTheme} from '../hooks';

interface SliderInputProps {
  defaultValue?: string;
  label: string;
  name?: string;
  value?: number;
  onChange?: (value: number) => void;
  primaryColor?: string;
  secondaryColor?: string;
  containerStyles?: ViewStyle;
  maximumValue: number;
  minimunValue?: number;
  unit?: string;
}

export const SliderInput: FC<SliderInputProps> = ({
  primaryColor = '#66B992',
  secondaryColor = 'rgba(26, 29, 28, 0.36)',
  containerStyles,
  maximumValue,
  minimunValue = 0,
  label,
  value,
  onChange = () => {},
  unit,
}) => {
  const {colors, textStyles} = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',

      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      ...containerStyles,
    },
    name: {
      ...textStyles.body,
      color: colors.lightGray,
    },
    input: {},
  });

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{label}: {value} {unit}</Text>
      <Slider
        animateTransitions
        thumbTintColor={primaryColor}
        minimumTrackTintColor={primaryColor}
        maximumTrackTintColor={secondaryColor}
        maximumValue={maximumValue}
        value={value}
        step={10}
        onValueChange={value => onChange(value as number)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text style={styles.name}>{minimunValue} {unit}</Text>
        <Text style={styles.name}>{maximumValue} {unit}</Text>
      </View>
    </View>
  );
};
