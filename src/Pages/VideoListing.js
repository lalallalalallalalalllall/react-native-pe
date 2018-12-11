import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Item from '../Components/Item'
export class VideoListing extends Component {
  state = {
    item : []
  }
  async componentDidMount() {
    var userInfo = await this.props.screenProps.userInfo()
    console.log(userInfo)
  
    this.setState({
      item: userInfo.item
    })

    console.log(this.state.item)
}
  render() {
    var itemList = []
    this.state.item.map(item => itemList.push(
      <Item link={item.url} name={item.username} key={item.id} color={item.color} runFunction={this.props.functions.playVideo}/>
    ))

    return (
      <View style={styles.container}>
        <Text>Main Home Pages added</Text>
        <View>
          {itemList}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  }
})


export default VideoListing


