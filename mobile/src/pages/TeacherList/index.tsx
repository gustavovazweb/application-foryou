//TEACHER LIST PAGE

//REACT IMPORTING
import React, { useState } from 'react';

//REACT NATIVE COMPONENTS IMPORTING
import { View, Text, ScrollView, TextInput } from 'react-native';

//ICONS IMPORTING
import { Feather } from '@expo/vector-icons';

//BORDERLESS BUTTON IMPORTING
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

//ASYNC IMPORTING
import AsyncStorage from '@react-native-community/async-storage';

//FOCUS EFFECT IMPORTING
import { useFocusEffect } from '@react-navigation/native';

//API IMPORTING
import api from '../../services/api';

//PAGES IMPORTING
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

//CSS STYLE IMPORTING
import styles from './styles';

//TEACHER LIST FUNCTION
function TeacherList() {
  //ALL CONSTANTS STATES
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  //LOAD FAVORITES FUNCTION
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => { 
          return teacher.id;
        });

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  //FOCUS EFFECT
  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  //FILTER FUNCTIONS
  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    //RESPONSE CONSTANT
    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  //TEACHER LIST STRUCTURE
  return (
    <View style={styles.container}>
      <PageHeader
        title="Teachers disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={25} color="#FfF" />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Idioma</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual idioma?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  value={weekDay}
                  onChangeText={text => setWeekDay(text)}
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton 
              onPress={handleFiltersSubmit} 
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
        <TeacherItem 
          key={teacher.id}
          teacher={teacher}
          favorited={favorites.includes(teacher.id)}
        />
        ))}
      </ScrollView>
    </View>
  );
}

//TECHER LIST EXPORTING
export default TeacherList;
