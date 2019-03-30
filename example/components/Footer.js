import React from 'react';
import { Button, Text, View, StyleSheet, Alert} from 'react-native';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.elementOfHeader}>Developed by Zhigamovsky</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footer: {
    width: '100%',
    marginLeft: 30,
    marginRight: 30,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#353535'
  },
  elementOfHeader: {
    padding: 15,
    color: 'white'
  }
});
