//LANDING PAGE

//REACT IMPORTING
import React, { useEffect, useState } from 'react'

//REACT NATIVE COMPONENTS IMPORTING
import { View, Text, Image } from 'react-native';

//NAVIGATION IMPORTING
import { useNavigation } from '@react-navigation/native';

//RECT BUTTON IMPORTING
import { RectButton } from 'react-native-gesture-handler';

//API IMPORTING
import api from '../../services/api';

//CSS STYLES IMPORTING
import styles from './styles';

//IMAGES AND ICONS IMPORTING
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

//LANDING FUNCTION
function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  //USE EFFECT
  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  //NAVIGATE TO CLASSES FUNCTION
  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  //NAVIGATE TO STUDY FUNCTION
  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  //LANDING STRUCTURE
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Aprender</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassIcon} />
          <Text style={styles.buttonText}>Ensinar</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

//LANDING EXPORTING
export default Landing;
