import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity, LogBox, ScrollView } from 'react-native';
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jokes from './data/index'
import styles from './style.app'

export default function App() {


  const [index, setindex] = useState(0)

  //funcion click this is funny

  const funny = async () => {
    await AsyncStorage.setItem(jokes[index].title, jokes[index].title + '_' + ' this is funny')
    if (index < jokes.length - 1) {

      setindex(index + 1)
    }
    else {
      alert('Thats all the jokes for today! Come back another day!')
      setindex(0)
    }


  }
  //funcion click this is not funny
  const notFunny = async () => {
    await AsyncStorage.setItem(jokes[index].title, jokes[index].title + '_' + ' this not is funny')
    if (index < jokes.length - 1) {

      setindex(index + 1)
    }
    else {
      alert('Thats all the jokes for today! Come back another day!')
      setindex(0)
    }

  }
  const getVotes = async () => {
    try {
      const value = await AsyncStorage.getItem(jokes[index].title)
      if (value !== null) {

        console.log(value);



      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  }
  console.log(index);
  getVotes()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={require('./assets/logo1.png')} />
        <Image source={require('./assets/logo2.png')} />
      </View>
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.title}>{jokes[index].title}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.textDetail}>
            {jokes[index].detail}
          </Text>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.funny} onPress={funny}>
            <Text style={styles.textFunny}>this is funny!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notfunny} onPress={notFunny}>
            <Text style={styles.textFunny}>this is not funny!</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.footer}>
          <Text style={styles.longText}>
            This appis created as part of HL solution program. The masterial con-tained
            on this website are provided for general imformation only and
            do not constitute any form of advice. HLS assumes no reponsibillity
            for the accuracy of any particular statement and accepts no liability
            for any loss or damage which may arise from reliance on the infor-
            for any loss or damage which may arise from reliance on the infor
            -mation contained on this site
          </Text>
          <Text style={styles.copy}>Copyright 2021 HLS</Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}



