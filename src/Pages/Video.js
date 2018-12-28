import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Video from 'react-native-video';


export class VideoPlayback extends Component {
    //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb 
    hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    close = () => {
        this.props.navigation.goBack()
    }
    render() {
        const uri = this.props.navigation.state.params.uri
        const colorName = this.props.navigation.state.params.colorName
        console.log(this.props.navigation.state.params)
        const colorCode = this.hexToRgb(this.props.navigation.state.params.colorCode) || { r: 0, g: 0, b: 0 }
        const frameStyle = StyleSheet.create({
            topFrame: {
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '12%',
                left: 0,
                backgroundColor: `rgba(${colorCode.r}, ${colorCode.g} , ${colorCode.b}, 0.4)`,
            },
            bottomFrame: {
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '12%',
                left: 0,
                backgroundColor: `rgba(${colorCode.r}, ${colorCode.g} , ${colorCode.b}, 0.4)`
            }

        })

        console.log(colorCode)
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={}>
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
                    <View style={styles.content}>
                        {/* <View style={frameStyle.topFrame} >
                        <Text style={styles.text}>Hello</Text>
                    </View> */}
                        <View style={frameStyle.bottomFrame} >
                            <Text style={styles.text}>{colorName}</Text>
                            <Text style={{ textAlign: 'right' }}>( some duration from upload date 01-01-0001)</Text>
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
        // justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
});

export default VideoPlayback