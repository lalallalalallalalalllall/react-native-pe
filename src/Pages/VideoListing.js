import React, { Component } from 'react'
import { Text, View, ScrollView , StyleSheet } from 'react-native'
import Item from '../Components/Item'

var interval ;
export class VideoListing extends Component {
  state = { 
    item: [],
    itemList : ()=>{
      
    }
  }
  async componentDidMount() {
    let userInfo = await this.props.screenProps.userInfo()
    this.setState({
      item: userInfo.item
    })
    interval = setInterval(async()=>{
     this.update_info()
    },5000)
  }
  
  update_info = async() => {
    let userInfo = await this.props.screenProps.userInfo()
    console.log(userInfo)
    userInfo.item.push(
      {
        id: Math.random(),
        userId: '5',
        color: '#999999',
        username: 'friend 9',
        url: 'https://s3-ap-southeast-1.amazonaws.com/pegeon-vide-test-cdn/video/sample.mp4',
        createdAt: '2018-1-20',
        colorName : 'Oren',
        seen : false
      }
    )
    this.setState({
      item: userInfo.item
    })
  }
  render() {
    // this.props.navigation.addListener(
    //   'willBlur ',
    //   data => {
    //     console.log(data)
    //     clearInterval(interval)
    //   }
    // );
    var itemList = []
    var items = this.state.item
    console.log('before',this.state.item)
    this.state.item.slice().reverse().forEach((item, index) => {
      itemList.push(
        < Item link={item.url} name={item.username} createdAt={item.createdAt} index={index+1} id={item.id} key={item.id} color={item.color} colorName={item.colorName} seen={item.seen || false} runFunction={this.props.functions.playVideo} />
      )
    })
    console.log('after',this.state.item)
    return (
      <ScrollView style={styles.container}>
        {/* <Text>Main Home Pages added</Text> */}
        <View>
          {itemList}
        </View>
      </ScrollView>
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


