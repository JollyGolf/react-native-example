import React from 'react';
import { Button, Text, View, StyleSheet, Alert} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.elementOfHeader} onPress={() => {this.props.getTypeContent("mainType")}}>Главная</Text> 
        <Text style={styles.elementOfHeader} onPress={() => {this.props.getTypeContent("settingsType")}}>Настройки</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    marginTop: 23,
    marginLeft: 30,
    marginRight: 30,
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
