import {FC, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {Menu, MenuItem} from 'react-native-material-menu';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from '../hooks';
import {useAuth} from '../hooks/useAuth';

interface MenuProps {}

export const AppMenu: FC<MenuProps> = () => {
  const {colors} = useTheme();
  const [visible, setVisible] = useState(false);

  const {logout} = useAuth();

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
      }}>
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
        onPress={showMenu}>
        <Icon name='person' size={38} color={colors.lightGray} />
      </TouchableOpacity>
      <View />
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onRequestClose={hideMenu}>
          <MenuItem onPress={onLogout}>
            <Text style={{color: colors.black}}>Cerrar sesión</Text>
          </MenuItem>
          {/*<MenuDivider />*/}
        </Menu>
      </View>
    </View>
  );
};
