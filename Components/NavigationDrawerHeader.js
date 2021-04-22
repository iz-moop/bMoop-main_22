// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity, Alert,StyleSheet,Text} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  
 let _menu = null;

  return (
         
    <View style={{flexDirection: 'row'}}>

      <View style={styles.main}>

<Menu
        ref={(ref) => (_menu = ref)}
        button={
          props.isIcon ? (
            <TouchableOpacity onPress={() => _menu.show()}>
              <Image
                source={{
                  uri:
                    'https://reactnativecode.com/wp-content/uploads/2020/12/menu_icon.png',
                }}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          ) : (
            <Text
              onPress={() => _menu.show()}
               style={props.textStyle}>
              {props.menutext}
            </Text>
          )
        }>
        <MenuItem onPress={() => {Alert.alert('PopUp Menu Button Clicked...')}}>
          Completed Order
        </MenuItem>

        <MenuItem>

        Current Order

        </MenuItem>

        <MenuDivider />

        <MenuItem onPress={() => {Alert.alert('PopUp Menu Button Clicked...')}}>

          Accepted Order
      
        </MenuItem>

        <MenuItem onPress={() => {Alert.alert('PopUp Menu Button Clicked...')}}>

        Cancel

</MenuItem>
      </Menu>
        
      </View>


     <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 35, height: 35, marginLeft: 5}}
        />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => _menu.show()}>
<Image
                source={require('../Images/fill.png')}
        style={{width: 35, height: 35, marginLeft: 270}}
      />

</TouchableOpacity>



    </View>
  );
  
};

export default NavigationDrawerHeader;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'flex-end',
  }, 

})