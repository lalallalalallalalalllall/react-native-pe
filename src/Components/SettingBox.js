import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Constance from '../Resources/Constance'
const { BUTTON_COLOR_NEW_VIDEO, BUTTON_COLOR_SEEN_VIDEO } = Constance.ui
export class SettingBox extends Component {

    // onPress = () => {
    //     this.props.runFunction(this.props.link, this.props.color, this.props.colorName, this.props.createdAt, this.props.id)
    // }
    state = {
        val: ''
    }
    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    name="val"
                    style={{ backgroundColor: this.props.color, textAlign: 'center',color:'#fff' }}
                    value={this.state.name}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // alignItems  : 'flex-start',
        padding: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 300,
        marginBottom: 10,
        backgroundColor: BUTTON_COLOR_SEEN_VIDEO
    },
})

export default SettingBox


