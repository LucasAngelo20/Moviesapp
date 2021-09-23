import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';
import Favorites from '../Pages/Favorites';
import Categories from '../Pages/Categories';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: 'transparent',
          borderRadius: 30,
          height: 70,
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard:true,
        
      
      }}>
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/Categories.png')}
                resizeMode="contain"
                style={[
                  styles.Icon,

                  {
                    tintColor: focused ? '#FF4E4E' : '#AC4A4A',
                    marginBottom: 10,
                  },
                ]}
              />
              <Text
                style={{fontSize: 10, color: focused ? '#FF4E4E' : '#AC4A4A'}}>
                Categories
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/Favorites.png')}
                resizeMode="contain"
                style={[
                  styles.Icon,
                  {
                    tintColor: focused ? '#FF4E4E' : '#AC4A4A',
                    marginBottom: 10,
                  },
                ]}
              />
              <Text
                style={{fontSize: 10, color: focused ? '#FF4E4E' : '#AC4A4A'}}>
                Favorites
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../Assets/Home.png')}
                resizeMode="contain"
                style={[
                  styles.Icon,
                  {
                    tintColor: focused ? '#FF4E4E' : '#AC4A4A',
                    marginBottom: 10,
                  },
                ]}
              />
              <Text
                style={{fontSize: 10, color: focused ? '#FF4E4E' : '#AC4A4A'}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../Assets/User.png')}
                resizeMode="contain"
                style={[
                  styles.Icon,
                  {
                    tintColor: focused ? '#FF4E4E' : '#AC4A4A',
                    marginBottom: 10,
                  },
                ]}
              />
              <Text
                style={{fontSize: 10, color: focused ? '#FF4E4E' : '#AC4A4A'}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../Assets/Settings.png')}
                resizeMode="contain"
                style={[
                  styles.Icon,
                  {
                    tintColor: focused ? '#FF4E4E' : '#AC4A4A',
                    marginBottom: 10,
                  },
                ]}
              />
              <Text
                style={{fontSize: 10, color: focused ? '#FF4E4E' : '#AC4A4A'}}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Icon: {
    height: 25,
    width: 25,
    top: 5,
  },
  Shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
