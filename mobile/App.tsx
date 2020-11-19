//STATUS BAR IMPORTING
import { StatusBar } from 'expo-status-bar';

//REACT IMPORTING
import React from 'react';

//APPLOADING IMPORTING
import { AppLoading } from 'expo';

//FONTS IMPORTING
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

//APPSTACK FILE IMPORTING
import AppStack from './src/routes/AppStack';

//APP FUNCTION EXPORTING
export default function App() {
  //ALL FONTS
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  //FONTS CONDITION
  if(!fontsLoaded){
    return <AppLoading />;
  }else{
  return (
    <> 
      <AppStack />
      <StatusBar style="light" />
    </>
  );
  }
}