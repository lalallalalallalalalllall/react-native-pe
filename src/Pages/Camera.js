import React, { Component } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native'

import { RNCamera } from 'react-native-camera'
const RecordButton = require('../Resources/img/RecordButton.png')
export class Camera extends Component {
    state = {
        recording: '',
        processing: ''
    }
    render() {

        const { recording, processing } = this.state;

        let button = (
            <TouchableOpacity
                onPress={this.startRecording.bind(this)}
                style={styles.capture}
            >
                <Image style={styles.logo} source={RecordButton} ></Image>
            </TouchableOpacity>
        );

        if (recording) {
            button = (
                <TouchableOpacity
                    onPress={this.stopRecording.bind(this)}
                    style={styles.capture}
                >
                    <Image style={styles.logo} source={RecordButton} ></Image>
                </TouchableOpacity>
            );
        }

        if (processing) {
            button = (
                <View style={styles.capture}>
                    {/* <TouchableWithoutFeedback onPress={this.registerAccount}> */}
                    <Image style={styles.logo} source={RecordButton} ></Image>
                    {/* </TouchableWithoutFeedback> */}
                    {/* <ActivityIndicator animating size={18} /> */}
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={"Permission to use camera"}
                    permissionDialogMessage={
                        "We need your permission to use your camera phone"
                    }
                />
                <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
                    {button}
                </View>
            </View>
        );
    }

    async startRecording() {
        this.setState({ recording: true });
        // default to mp4 for android as codec is not set
        const { uri, codec = "mp4" } = await this.camera.recordAsync();
        console.log(uri)
        this.props.functions.modifyVideo(uri)
    }

    stopRecording() {
        this.camera.stopRecording();
        this.setState({ recording: false });
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '90%'
    },
    capture: {
        flex: 0,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    logo: {
        width: 110,
        height: 100
    }
});


export default Camera