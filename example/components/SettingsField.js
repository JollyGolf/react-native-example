import React from 'react';
import { Button, Text, View, StyleSheet, ScrollView} from 'react-native';
import Item from './Item.js';

export default class SettingsField extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollWrapper}>
        <View style={styles.SettingsField}>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 1</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 2</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 3</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 4</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 5</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 1</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 2</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 3</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 4</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 5</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 1</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 2</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 3</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 4</Text>
        </View>
        <View style={styles.itemOfSettings}>
          <Text style={styles.fontStyle}>Settings 5</Text>
        </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scrollWrapper: {
    width: '100%'
  },
  SettingsField: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '100%'
  },
  itemOfSettings: {
    height: 50,
    backgroundColor: 'grey',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderTopColor: 'black'
  },
  fontStyle: {
    color: 'black'
  }
});