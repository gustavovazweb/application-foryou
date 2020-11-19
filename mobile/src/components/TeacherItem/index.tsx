//TEACHER ITEM PAGE

//REACT IMPORTING
import React, { useState } from "react";

//REACT NATIVE COMPONENTS IMPORTING
import { View, Image, Text, Linking } from 'react-native';

//RECT BUTTON IMPORTING
import { RectButton } from "react-native-gesture-handler";

//ASYNC IMPORTING
import AsyncStorage from '@react-native-community/async-storage';

//ICON IMPORTING
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

//CSS STYLES IMPORTING
import styles from './styles';

//API IMPORTING
import api from "../../services/api";

//TEACHER INTERFACE
export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: number;
}

//PROPS INTERFACE
interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

//TEACHER ITEM CONSTANT
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }: TeacherItemProps) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  //WHATSAPP LINK FUNCTION
  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  //FAVORITE TOGGLE FUNCTION
  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  //TEACHER ITEM STRUCTURE
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[
              styles.favoriteButton,
              isFavorited ? styles.favorited : {}
            ]}
            onPress={handleToggleFavorite}
          >
            {isFavorited
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />
            }
          </RectButton>

          <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

//TEACHER ITEM EXPORTING
export default TeacherItem;
