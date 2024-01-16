import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/homeScreen';
import SearchScreen from '../screens/searchScreen/searchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E50914',
        inactiveTintColor: 'black',
      }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
