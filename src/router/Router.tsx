import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Auth/Login';
import Map from '../screens/Map/Map';
import List from '../screens/List/List';
import {Text, TouchableOpacity, View} from 'react-native';
import DarkModeIcon from '../assets/images/DarkMode';
import {Appearance} from 'react-native';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {themes} from '../thema/thema';
import {Theme} from '../thema/thema';
import Create from '../screens/Create/Create';
import Update from '../screens/Update/Update';
import {useDispatch, useSelector} from 'react-redux';
import {authCheck, save} from '../redux/slices/authSlices';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIconStyle: {
          display: 'none',
        },
        tabBarStyle: {
          backgroundColor: '#15202b',
          borderTopWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarActiveTintColor: '#ED240C',
        tabBarInactiveTintColor: '#657786',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'normal',
          marginBottom: 12,
        },
      }}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
};

const Router = () => {
  const [theme, setTheme] = useState<Theme>(themes.light);
  const colorScheme = Appearance.getColorScheme();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const themeChange = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  const logout = () => {
    dispatch(authCheck(false));
    dispatch(save({name: '', surname: ''}));
  };

  return (
    <NavigationContainer
      theme={
        theme === themes.light ? NavigationDefaultTheme : NavigationDarkTheme
      }>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.header,
          },
          headerTintColor: theme.text,
        }}>
        <>
          {!isAuth ? (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: true,
                  headerTitle: () => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '97%',
                      }}>
                      <View />
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          marginLeft: 10,
                          color: theme.text,
                        }}>
                        Auth
                      </Text>
                      <TouchableOpacity onPress={() => themeChange()}>
                        <DarkModeIcon color={theme.text} />
                      </TouchableOpacity>
                    </View>
                  ),
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Map"
                component={HomeStackScreen}
                options={{
                  headerShown: true,
                  headerTitle: () => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: '98%',
                      }}>
                      <TouchableOpacity
                        style={{marginRight: 10}}
                        onPress={() => logout()}>
                        <Text
                          style={{
                            color: theme.text,
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Logout
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => themeChange()}>
                        <DarkModeIcon color={theme.text} />
                      </TouchableOpacity>
                    </View>
                  ),
                }}
              />
              <Stack.Screen name="CreateLocation" component={Create} />
              <Stack.Screen name="Update" component={Update} />
            </>
          )}
          {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: true,
              headerTitle: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '97%',
                  }}>
                  <View />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginLeft: 10,
                      color: theme.text,
                    }}>
                    Auth
                  </Text>
                  <TouchableOpacity onPress={() => themeChange()}>
                    <DarkModeIcon color={theme.text} />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Map"
            component={HomeStackScreen}
            options={{
              headerShown: true,
              headerTitle: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '90%',
                  }}>
                  <TouchableOpacity
                    style={{marginRight: 10}}
                    onPress={() => logout()}>
                    <Text
                      style={{
                        color: theme.text,
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Logout
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => themeChange()}>
                    <DarkModeIcon color={theme.text} />
                  </TouchableOpacity>
                </View>
              ),
            }}
          /> 
          */}
          {/* <Stack.Screen name="CreateLocation" component={Create} />
          <Stack.Screen name="Update" component={Update} /> */}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
