import React from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';

import Item from './Item.js';
import Notes from './Notes/Notes';

const collectionComponents = {};
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8];

export default class MainField extends React.Component {
  showAllItems(){
    return exampleArray.map((index) => {
      return <Item index={index} key={index} />
    })
  }
  render() {
    return (
      <View style={styles.MainField}>
        <Notes dataIndex="data-notes" />
        { this.showAllItems() }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainField: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  }
});