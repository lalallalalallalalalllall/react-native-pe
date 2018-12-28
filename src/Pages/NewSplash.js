import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Constance from '../Resources/Constance'

const { APP_NAME } = Constance.app
const { BACKGROUND_COLOUR, DEFAULT_TEXT_COLOUR } = Constance.ui
const { REGISTER_SPLASH_MSG, LOGIN_SPLASH_MSG } = Constance.message
const defaultLogo = require('../Resources/img/NewLogo.png')
const loginLogo = require('../Resources/img/LoginLogo.png')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOUR,
    },
    title: {
        fontSize: 20,
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
    state = {
        message: LOGIN_SPLASH_MSG,
        logo: defaultLogo
    }
    componentWillMount() {
        setInterval(() => {
            this.setState({ message: this.state.message == REGISTER_SPLASH_MSG ? LOGIN_SPLASH_MSG : REGISTER_SPLASH_MSG })
        }, 3000)
    }

    login = () => {
        this.setState({ logo: loginLogo })
        setTimeout(() => {
            this.props.navigation.navigate("Login")
            this.setState({ logo: defaultLogo })
        }, 1000);
    }

    register = () => {
        this.props.navigation.navigate("Register")
    }

    render() {
        return (
            <TouchableWithoutFeedback delayLongPress={1000} onLongPress={this.register} onPress={this.login} disabled={false}>
                <View style={styles.container} >
                    <Image style={styles.logo} source={this.state.logo}></Image>
                    <Text style={styles.title} >{this.state.message}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default NewSplash