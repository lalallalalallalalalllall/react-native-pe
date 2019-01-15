import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

import Constance from '../Resources/Constance'
import Friend from '../Components/Friend'
const { BACKGROUND_COLOUR, DEFAULT_TEXT_BOX_COLOUR } = Constance.ui
const ProceedButton = require('../Resources/img/ProceedButton.png')



export class SendToFriends extends Component {
  sendVideo = () => {
    alert('Video is send to ...')
  }
  render() {
    // alert(JSON.stringify(this.props.navigation.state))
    console.log(this.props)
    let friendComp = []
    let friendList = [{ name: 'all', id: 'default', options: { sendToAll: true } }, { name: 'food', id: '124' }, { name: 'mango', id: '123' }]
    friendList.forEach((friend, index) => {
      friendComp.push(
        < Friend key={friend.id} name={friend.name} id={friend.id} options={friend.options} />
      )
    })
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Send To</Text>
        <View style={styles.friendContainer}>
          {friendComp}
        </View>
        {/* <TouchableWithoutFeedback onPress={this.sendVideo}>
          <Image style={styles.logo} source={ProceedButton} ></Image>
        </TouchableWithoutFeedback> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOUR,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2DA681',
    marginBottom: 10,
    marginTop: 10
  },
  friendContainer: {},
  logo: {
    width: 175,
    height: 150,
    marginBottom: 10,
  }
})


export default SendToFriends
