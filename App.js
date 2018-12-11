/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { PermissionsAndroid, View, StatusBar, Text, AsyncStorage } from "react-native"
import Camera from './src/Pages/Camera'
import Video from './src/Pages/Video'

import Login from './src/Pages/Login'
import Register from './src/Pages/Register'
import Splash1 from './src/Pages/Splash1'
import Splash2 from './src/Pages/Splash2'
import MainSwiper from './src/Pages/MainSwiper'



var initial = 'Splash1'
const AppNavigator = createStackNavigator({
  Login: Login,
  Register: Register,
  Video: Video,
  Splash1: Splash1,
  Splash2: Splash2,
  Camera: Camera,
  MainSwiper: MainSwiper
}, {
    initialRouteName: initial,
    navigationOptions: {
      header: null
    }
  }
)

const key = 'pegeon-user';

export default class App extends Component {

  state = {
    userInformation: {},
    statusBar: '#000'
  }
  async componentDidMount() {
    try {
      const sampleInfo = {
        userId: '012345',
        username: 'food',
        item: [
          {
            id : '1',
            userId: '1',
            color: '#999999',
            username: 'friend 1',
            url: 'https://s3-ap-southeast-1.amazonaws.com/pegeon-vide-test-cdn/video/sample.mp4',
            createdAt: '2018-10-20'
          },
          {
            id : '2',
            userId: '2',
            color: '#110011',
            username: 'friend 2',
            url: 'https://s3-ap-southeast-1.amazonaws.com/pegeon-vide-test-cdn/video/sample.mp4',
            createdAt: '2018-10-20'
          },
        ],
        friendList: [
          {
            userId: '1',
            username: 'friend 1',
            color: '#9C8327',
            fav: false
          },
          {
            userId: '2',
            username: 'friend 2',
            color: '#465399',
            fav: true
          }
        ],
        notification: {
          friendsRequest: [
            {
              id: '3',
              username: 'new friends 3',
              fav: false
            }
          ],
          favUpdate: []
        }
      }
      await AsyncStorage.setItem(key, JSON.stringify(sampleInfo))
      console.log("smoethings")
      const userInformation = await AsyncStorage.getItem(key)
      this.setState({
        userInformation: JSON.parse(userInformation)
      })


      if(this.state.userInformation.notification.friendsRequest.length){
        this.setState({
          statusBar : "blue"
        })
      }else if (this.state.userInformation.notification.favUpdate.length){
        this.setState({
          statusBar : "red"
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  getUserInformation = async () => {
    const userInformation = await AsyncStorage.getItem(key)
    return JSON.parse(userInformation)
  }


  render() {
    return (
      <>
        <StatusBar
          backgroundColor={this.state.statusBar}
          barStyle="light-content"
        />
        <AppNavigator
          screenProps={{
            userInfo: this.getUserInformation
          }}

        />
      </>
    );
  }
}
