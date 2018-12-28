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


//used config data
import Constance from './src/Resources/Constance'
import Services from './src/Services'
const { _update_video_status } = Services


const { DEFAULT_NO_NOTIFICATION_COLOUR, FRIEND_REQUEST_NOTIFICATION_COLOUR, FAVOURITE_UPDATE_NOTIFICATION_COLOUR } = Constance.ui
const { USER_INFORMATION_ASYNC_STORAGE_KEY } = Constance.app
const { STATUS_LOGIN, STATUS_NOT_LOGIN } = Constance.status


//register all the pages 
import Camera from './src/Pages/Camera'
import Video from './src/Pages/Video'
import Login from './src/Pages/Login'
import Register from './src/Pages/Register'
import NewSplash from './src/Pages/NewSplash'
import MainSplash from './src/Pages/MainSplash'
import MainSwiper from './src/Pages/MainSwiper'
import Loading from './src/Pages/Loading'
import Verification from './src/Pages/Verification'
import VideoEdit from './src/Pages/VideoEdit'
import SendToFriends from './src/Pages/SendToFriends'
// must be matching somethings inside AppNavigator
const initial = 'Loading'
const AppNavigator = createStackNavigator({
  Loading: Loading,
  Login: Login,
  Register: Register,
  Video: Video,
  VideoEdit: VideoEdit,
  NewSplash: NewSplash,
  MainSplash: MainSplash,
  Camera: Camera,
  MainSwiper: MainSwiper,
  Verification: Verification,
  SendToFriends: SendToFriends
}, {
    initialRouteName: initial,
    navigationOptions: {
      header: null
    }
  }
)

const prevGetStateForAction = AppNavigator.router.getStateForAction;

AppNavigator.router.getStateForAction = (action, state) => {
  // Do not allow to go back from Home
  if (action.type === 'BACK' && state && state.routes[state.index].routeName === 'MainSwiper') {
    return null;
  }

  // // Do not allow to go back to Login
  // if (action.type === 'Navigation/BACK' && state) {
  //   const newRoutes = state.routes.filter(r => r.routeName !== 'Login');
  //   const newIndex = newRoutes.length - 1;
  //   return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
  // }
  return prevGetStateForAction(action, state);
};

console.log(prevGetStateForAction)
//storage key
const key = USER_INFORMATION_ASYNC_STORAGE_KEY;

export default class App extends Component {

  state = {
    status: STATUS_NOT_LOGIN,
    userInformation: {},
    statusBar: DEFAULT_NO_NOTIFICATION_COLOUR
  }
  async componentDidMount() {
    // this.removeUserInformation()
    try {
      //this is an existing user
      // await AsyncStorage.setItem(key, JSON.stringify(sampleInfo))

      const userInformation = await AsyncStorage.getItem(key)
      this.setState({
        userInformation: JSON.parse(userInformation)
      })
      if (this.state.userInformation.notification.friendsRequest.length) {
        this.setState({
          statusBar: FRIEND_REQUEST_NOTIFICATION_COLOUR
        })
      } else if (this.state.userInformation.notification.favUpdate.length) {
        this.setState({
          statusBar: FAVOURITE_UPDATE_NOTIFICATION_COLOUR
        })
      } else {
        this.setState({
          statusBar: DEFAULT_NO_NOTIFICATION_COLOUR
        })
      }
      this.setState({
        status: STATUS_LOGIN
      })

    } catch (e) {

      //this user is a new user
    }
  }

  updateVideoStatus = async (videoId) => {
    let tempUserInfo = this.state.userInformation
    console.log(tempUserInfo)
    // tempUserInfo.items.forEach(i => {
    //   if(i.id==videoId ){
    //     i.seen = true
    //   }
    // })

    // this.setState({
    //   userInformation : tempUserInfo
    // })

    // await _update_video_status( tempUserInfo.userId , videoId)

  }
  storeUserInformation = async (userInfo) => {
    await AsyncStorage.setItem(key, JSON.stringify(userInfo))
    this.setState({
      userInformation: userInfo
    })
  }

  getUserInformation = async () => {
    return this.state.userInformation
  }

  removeUserInformation = async () => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('removed data')
    }
    catch (e) {
      console.log("no data to remove")
    }

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
            storeUserInfo: this.storeUserInformation,
            removeUserInfo: this.removeUserInformation,
            updateVideoStatus: this.updateVideoStatus,
            userInfo: this.getUserInformation,
            status: this.state.status
          }}
        />
      </>
    );
  }
}
