import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const Content = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={'https://makrverse.com/assets/img/logoFull.png'}
      />
      <Text style={styles.title}>Welcome to Makrverse!</Text>
      <Text style={styles.paragraph}>
        Makrverse is a social media marketplace for inventors and tech
        enthusiasts.
      </Text>
      <Text style={styles.paragraph}>
        On Makrverse, you can share and sell your creations, help others by
        building their challenges and interact with other tech enthusiasts.
      </Text>
      <Butt
        title="Enter the Making Universe!"
        color= "#316be9"
        accessibilityLabel="Enter the Making Universe"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    margin: 20,
    marginTop: 0,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    margin: 24,
    height: 50,
    width: 250,
  }
});
export default Content