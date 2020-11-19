//REACT IMPORTING
import React from 'react';

//NAVIGATION IMPORTING
import { NavigationContainer } from '@react-navigation/native';

//STACK NAVIGATOR IMPORTING
import { createStackNavigator } from '@react-navigation/stack';

//PAGES IMPORTING
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

//STACK NAVIGATOR CONSTANT
const { Navigator, Screen } = createStackNavigator();

//APP STACK FUNCTION
function AppStack() {
  return (
    //ALL NAVIGATION PAGES
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

//APPSTACK EXPORTING
export default AppStack;
