import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Constance from '../Resources/Constance'

const {APP_NAME} = Constance.app
const {BACKGROUND_COLOUR , DEFAULT_TEXT_COLOUR} = Constance.ui

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOUR,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: DEFAULT_TEXT_COLOUR,
        marginBottom: 10
    },
    logo: {
        width: 175,
        height: 150,
        marginBottom: 10,
    }
})

export class NewSplash extends Component {
    login = () => {
        this.props.navigation.navigate("Login")
    }

    register = () => {
        this.props.navigation.navigate("Register")
    }

    render() {
        return (
            <TouchableWithoutFeedback delayLongPress={1000} onLongPress={this.register} onPress={this.login} disabled={false}>
                <View style={styles.container} >
                    <Image style={styles.logo} source={require('../Resources/img/NewLogo.png')}></Image>
                    <Text style={styles.title} >{APP_NAME}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default NewSplash