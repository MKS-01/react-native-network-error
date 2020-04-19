import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import CheckConnection from './utils/CheckConnetion';

const ErrorCard = () => {
  return (
    <View style={styles.errorContainer}>
      <View>
        <Image source={require('./assets/img/error.png')} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.errorHead}>Connection Error</Text>
        <Text style={styles.subText}>
          Please check your network connectivity and try again
        </Text>
      </View>
    </View>
  );
};

const NetworkTest = () => {
  let network = CheckConnection();
  if (network === false) {
    return <ErrorCard />;
  }
  return (
    <SafeAreaView style={styles.rootView}>
      <View style={styles.rootContainer}>
        <Text style={styles.title}>Network Connection Test</Text>
        <Text style={(styles.subText, {textAlign: 'justify'})}>
          React Native is an open source framework for building Android and iOS
          applications using React and the app platform’s native capabilities.
          With React Native, you use JavaScript to access your platform’s APIs
          as well as to describe the appearance and behavior of your UI using
          React components: bundles of reusable, nestable code. You can learn
          more about React in the next section. But first, let’s cover how
          components work in React Native.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NetworkTest;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'column',
  },
  errorContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    justifyContent: 'center',
  },
  rootContainer: {justifyContent: 'flex-start', padding: 10},
  img: {height: 120, width: 120},
  textContainer: {
    alignItems: 'center',
  },
  title: {marginBottom: 10, fontSize: 20, fontWeight: 'bold'},
  errorHead: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 50,
    textAlign: 'center',
  },
});
