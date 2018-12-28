import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import Constance from '../Resources/Constance'

const { APP_NAME } = Constance.app
const { STATUS_LOGIN, STATUS_NOT_LOGIN } = Constance.status
const { BACKGROUND_COLOUR } = Constance.ui

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
        color: '#2DA681',
        marginBottom: 10
    },
    logo: {
        width: 175,
        height: 150,
        marginBottom: 10,
    }
})
export class Loading extends Component {
    componentDidMount() {
        setTimeout(() => {
            if (this.props.screenProps.status == STATUS_LOGIN) {
                this.props.navigation.navigate("MainSplash")
            } else {
                this.props.navigation.navigate("NewSplash")
            }
        }, 3000)
    }
    
    render() {
        return (
            <View style={styles.container} >
                <Image style={styles.logo} source={require('../Resources/img/NewLogo.png')}></Image>
                <Text style={styles.title} >Loading ...</Text>
            </View>
        )
    }
}

export default Loading