import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class SendToFriends extends Component {
  render() {
      alert(this.props.navigation.state)
    return (
      <View>
        <Text> send to friends </Text>
      </View>
    )
  }
}

export default SendToFriends
