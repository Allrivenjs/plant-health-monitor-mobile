import {FC, useEffect, useRef, useState} from 'react';

import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Typography} from '../../components';
import {AppLineChart, DatasetLineChart} from '../../components/AppLineChart';
import {useTheme} from '../../hooks';

interface InfoCardProps {
  content: string;
  name: string;
  color: string;
  lightColor: string;
  icon: string;
  labels: string[];
  datasets: DatasetLineChart[];
  prefix?: string;
}

export const InfoCard: FC<InfoCardProps> = ({
  content,
  name,
  color,
  icon,
  lightColor,
  labels,
  datasets,
  prefix = '',
}) => {
  const {colors, textStyles} = useTheme();
  const [isDropDown, setDropDown] = useState(false);

  const cardHeight = useRef(new Animated.Value(74)).current;

  const onToggleDropDown = () => setDropDown(!isDropDown);

  useEffect(() => {
    Animated.timing(cardHeight, {
      toValue: isDropDown ? 300 : 74,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [isDropDown]);

  const style = StyleSheet.create({
    container: {
      marginVertical: 6,
      backgroundColor: color,
      width: '100%',
      borderRadius: 10,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'space-between',
      height: 74,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleContainer: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    valueContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    value: {
      ...textStyles.heading3,
      fontSize: 38,
      color: colors.white,
    },
    expandBtnContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    expandBtn: {
      width: 38,
      height: 38,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{rotateX: isDropDown ? '180deg' : '0deg'}],
    },
  });

  return (
    <Animated.View style={{...style.container, height: cardHeight}}>
      <View style={style.header}>
        <View style={style.titleContainer}>
          <View style={style.iconContainer}>
            <View
              style={{
                backgroundColor: colors.background,
                width: 38,
                height: 38,
                borderRadius: 100,
              }}
            />
            <Icon
              name={icon}
              size={28}
              color={color}
              style={{position: 'absolute'}}
            />
          </View>
          <Typography
            style={{color: colors.white, fontSize: 14, marginLeft: 12}}>
            {name}
          </Typography>
        </View>

        <View style={style.valueContainer}>
          <Typography style={style.value}>{content}</Typography>
        </View>

        <View style={style.expandBtnContainer}>
          <TouchableOpacity style={style.expandBtn} onPress={onToggleDropDown}>
            <Icon
              name='arrow-drop-down'
              size={28}
              color={colors.white}
              style={{position: 'absolute'}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        {isDropDown && (
          <AppLineChart
            lightColor={lightColor}
            backgroundColor={color}
            labels={labels}
            datasets={datasets}
            prefix={prefix}
          />
        )}
      </View>
    </Animated.View>
  );
};
