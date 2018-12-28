import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from '@nart/react-native-swiper'
import VideoListing from './VideoListing'
import Camera from './Camera'



export class MainSwiper extends Component {
    
    async componentDidMount() {
        var userInfo = await this.props.screenProps.userInfo()
    }
    
    playVideo = async (uri, colorCode, id) => {
        this.props.navigation.push("Video", { uri: uri, colorCode: colorCode })
        this.props.screenProps.updateVideoStatus(id)
    }

    modifyVideo = async ( uri ) => {
        this.props.navigation.push("Video",{uri : uri , colorCode : '#617DE1'})
    }

    render() {
        return (
            <Swiper style={styles.wrapper} loop={false} showsPagination={false} index={1}>
                <Camera functions = {{modifyVideo : this.modifyVideo }}/>
                <Swiper style={styles.wrapper} loop={false} horizontal={false} showsPagination={false} index={1}>
                    
                    <VideoListing screenProps={this.props.screenProps} functions={{
                        playVideo: this.playVideo
                    }} />
                    <View>
                        <Text>Food</Text>
                    </View>
                    <View>
                        <Text>FOOD</Text>
                    </View>
                </Swiper>
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