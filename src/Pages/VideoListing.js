import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Item from '../Components/Item'
export class VideoListing extends Component {
  state = { 
    item: [],
    // itemList: 
  }
  async componentDidMount() {
    setInterval(()=>{
      // let userInfo = await this.props.screenProps.userInfo()
      // console.log(userInfo)
  
      // this.setState({
      //   item: userInfo.item
      // })
    },5000)
  }
  render() {
    console.log('this.state.item ned1')
    console.log(this.state.item)
    var itemList = []
    var count = 0;
    this.state.item.forEach(item => {
      count=count+=1
      itemList.push(
        < Item link={item.url} name={item.username} index={count} id={item.id} key={item.id} color={item.color} seen={item.seen || false} runFunction={this.props.functions.playVideo} />
      )
    })

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
    padding: 20,
    backgroundColor: '#fff',
  }
})


export default VideoListing


