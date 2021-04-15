import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

import { Button } from 'native-base';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/chipLogo.png')}></Image>
      <Text style={styles.title}>Chippewas of Georgina Island Barge Tracking App</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title2}>Are you a member of Chippewas of Georgina Island Community and reside on the island?</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.buttons} rounded>
              <Text>Yes</Text>
        </Button>
        <Button style={styles.buttons} rounded>
              <Text>No</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title2: {
    fontSize: 20,
    textAlign: 'center',
    width: '80%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttons: {
    width: 125,
    justifyContent: 'center',
    marginBottom: 40
  },
  buttonContainer: {
    paddingTop: 40
  }
});
