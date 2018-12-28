import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Video from 'react-native-video';
import Constance from '../Resources/Constance'
import Services from '../Services'

const { _upload_video } = Services
const recordBtn = require('../Resources/img/Logo.png')
const { VIDEO_TAG_COLOUR } = Constance.ui
export class VideoEdit extends Component {
    //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb 
    state = {
        colourCode: '#ffffff',
        colourName: 'default',
        index: 0,
    }
    hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    proceed = async () => {
        console.log('dosomethings')
        //upload first to the website 
        //returning the url
        var url = await _upload_video()

        //navigate to sent to friends
        this.props.navigation.navigate("SendToFriends", {
            url: url,
            colourCode: this.state.colourCode,
            colourName: this.state.colourName
        })
    }
    componentWillMount() {
        this.setState({ index: 0, colourCode: VIDEO_TAG_COLOUR[0].COLOUR_CODE, colourName: VIDEO_TAG_COLOUR[0].NAME })
    }
    changeScreenColour = () => {
        console.log('enter')
        var newIndex = this.state.index + 1
        console.log(newIndex)
        if (newIndex >= VIDEO_TAG_COLOUR.length) {
            newIndex = 0
        }
        var newColourCode = VIDEO_TAG_COLOUR[newIndex]
        this.setState({ index: newIndex, colourCode: newColourCode.COLOUR_CODE, colourName: newColourCode.NAME })
    }
    render() {
        const uri = this.props.navigation.state.params.uri
        const colourCode = this.hexToRgb(this.state.colourCode || '#000000')
        const colourName = this.state.colorName
        const frameStyle = StyleSheet.create({
            // topFrame: {
            //     position: 'absolute',
            //     top: 0,
            //     width: '100%',
            //     height: '12%',
            //     left: 0,
            //     backgroundColor: `rgba(${colourCode.r}, ${colourCode.g} , ${colourCode.b}, 0.4)`,
            // },
            bottomFrame: {
                // position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '12%',
                left: 0,
                backgroundColor: `rgba(${colourCode.r}, ${colourCode.g} , ${colourCode.b}, 0.4)`
            }

        })
        return (
            <View style={styles.container}>
                <Video
                    source={{ uri: uri }}
                    style={styles.video}
                    muted={false}
                    repeat={true}
                    resizeMode={"cover"}
                    volume={5.0}
                    rate={1.0}
                    ignoreSilentSwitch={"obey"}
                />
                <TouchableWithoutFeedback onPress={this.changeScreenColour}>
                    <View style={styles.content}>
                        {/* <View style={frameStyle.topFrame} >
                        <Text style={styles.text}>Hello</Text>
                    </View> */}
                        <TouchableWithoutFeedback onPress={this.proceed} style={{}} >
                            <Image style={styles.logo} source={recordBtn} ></Image>
                        </TouchableWithoutFeedback>
                        <View style={frameStyle.bottomFrame} >
                            <Text style={styles.text}>{this.state.colourName}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    logo: {
        width: 175,
        height: 150,
        marginBottom: 10
    }
});

export default VideoEdit