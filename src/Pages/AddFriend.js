import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FriendLogo from '../Components/FriendLogo'
export class AddFriend extends Component {
  render() {
    //test
    var listing = []
    var friendList = [{
      name : 'hao yoong',
      id : '123'
    },{
      name : 'hao yoong again',
      id : '2'
    }]

    // friendList.forEach(i =>{
    //   listing.push(<FriendLogo key={i.id} name={i.name} type={'add'}/>)
    // })

    return (
      <View>
        <Text>Add Friends</Text>
        <FriendLogo />
      </View>
    )
  }
}

export default AddFriend
