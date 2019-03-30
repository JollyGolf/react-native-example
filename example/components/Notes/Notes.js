import React from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';

export default class Notes extends React.Component {
  render() {
    return (
      <View style={styles.item} dataIndex={ this.props.dataIndex }>
        <Text style={styles.titleElement}>Notes</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    backgroundColor: 'darkgrey',
    margin: 10,
    borderWidth: 3,
    borderRadius: 20,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleElement: {
  	fontWeight: 'bold'
  }
});