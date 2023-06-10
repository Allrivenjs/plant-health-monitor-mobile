import {FC, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Menu, MenuItem} from 'react-native-material-menu';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Text} from 'react-native-svg';

import { useTheme } from '../hooks';
import { useAuth } from '../hooks/useAuth';

interface MenuProps {}

export const AppMenu: FC<MenuProps> = () => {
  const {colors} = useTheme();
  const [visible, setVisible] = useState(false);

  const { logout } = useAuth();

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const onLogout = async () => {
    await logout();
  };

  return (
    <View
      style={{
        width: '100%',
        marginTop: 12,
        paddingHorizontal: 16,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: colors.background,
          borderRadius: 50,
          width: 48,
          height: 48,
          alignSelf: 'flex-end',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={showMenu}
      >

          <Icon name='person' size={38} color={colors.lightGray} />
      </TouchableOpacity>
      <View />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          anchor={<Text onPress={showMenu}>Show menu</Text>}
          onRequestClose={hideMenu}>
          <MenuItem onPress={onLogout}>Cerrar sesión</MenuItem>
          {/*<MenuDivider />*/}
        </Menu>
      </View>
    </View>
  );
};
