import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image } from 'react-native';
import '../../assets/images/wheel.png' 

export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#101220',
    tabBarStyle: {
    backgroundColor: '#101220',
    height: 100,
    },
  }}
>
      <Tabs.Screen name="index" options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => {
          return (
            <Image
              className='h-16 w-16 mt-6'
              source={require('../../assets/images/wheel.png')}
            />
          );
        }
      }}/>
    </Tabs>
  )
}