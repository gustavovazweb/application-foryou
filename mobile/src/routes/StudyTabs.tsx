//REACT IMPORTING
import React from 'react';

//TAB NAVIGATOR IMPORTING
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//ICONS IMPORTING
import { Ionicons } from '@expo/vector-icons';

//PAGES IMPORTING
import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

//TAB NAVIGATOR CONSTANT
const { Navigator, Screen } = createBottomTabNavigator();

//STUDY TAB FUNCTION
function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      {/* TEACHER LIST TAB */}
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Teachers',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-easel" size={size} color={focused ? '#2f83e8' : color} />
            );
          }
        }}
      />
      {/* FAVORITES LIST TAB */}
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-heart" size={size} color={focused ? '#2f83e8' : color} />
            );
          }
        }}
      />
    </Navigator>
  )
}

//STUDY TABS EXPORTING
export default StudyTabs;
