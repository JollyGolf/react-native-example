import React from 'react';
import MainField from './MainField.js';
import SettingsField from './SettingsField.js';

const Field = ({type}) => {
  if(type === "mainType") {
    return <MainField type={type} /> 
  }
  else if(type === "settingsType") {
    return <SettingsField type={type} />
  }
}

export default Field;