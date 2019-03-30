import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';
import MainField from './components/MainField.js';
import ChooseField from './components/ChooseField.js';
import Footer from './components/Footer.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: "mainType"
    } 
  } 
  getTypeContent = (type) => {
    this.setState({type: type});
  }
  render() {
    return (
      <View style={styles.container}>
        <Header getTypeContent={this.getTypeContent}/>
        <ChooseField type={this.state.type}/>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
