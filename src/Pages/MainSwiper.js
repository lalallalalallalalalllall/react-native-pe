import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from '@nart/react-native-swiper'
import VideoListing from './VideoListing'
import Camera from './Camera'



export class MainSwiper extends Component {
    
    async componentDidMount() {
        console.log(this.props)
        var userInfo = await this.props.screenProps.userInfo()
    }
    
    playVideo = async (uri, colorCode, colorName, id) => {
        this.props.navigation.push("Video", { uri: uri, colorCode: colorCode ,colorName : colorName })
        this.props.screenProps.updateVideoStatus(id)
    }

    modifyVideo = async ( uri ) => {
        this.props.navigation.push("VideoEdit",{uri : uri })
    }

    render() {
        return (
            <Swiper style={styles.wrapper} loop={false} showsPagination={false} index={1}>
                <Camera functions = {{modifyVideo : this.modifyVideo }}/>
                <VideoListing screenProps={this.props.screenProps} functions={{
                        playVideo: this.playVideo
                    }} />
                    {/* <Swiper style={styles.wrapper} loop={false} horizontal={false} showsPagination={false} index={1}>
                    
                   
                    <View>
                        <Text>Food</Text>
                    </View>
                    <View>
                        <Text>FOOD</Text>
                    </View>
                </Swiper> */}
                <View style={styles.container}>
                    <Text style={styles.text}>3</Text>
                </View>
            </Swiper>
        )
    }
}


const styles = StyleSheet.create({
    wrapper: {

    },
    container: {

    },
    text: {}


})
export default MainSwiper