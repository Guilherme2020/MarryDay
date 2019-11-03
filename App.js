import React, {Component} from 'react';
import {ImageBackground, StyleSheet, StatusBar, View} from 'react-native';

import {CountdownComponent,getTimeDurationMarry} from './src/components/CountDown'

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      totalDuration: 0
    }
  }

  componentDidMount(){}
  
 
  render() {
    
    console.log(this.state.totalDuration)

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent />


        <CountdownComponent 
          until={getTimeDurationMarry(this.state.totalDuration)}
        />
      </View>



    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgb(113, 89, 193)',
    flex: 1, justifyContent: 'center' 
  },
  colorStatusBar:{
    color: 'rgb(113, 89, 193)'
  },
  digitStyle:{
    backgroundColor:'white'
  },
})