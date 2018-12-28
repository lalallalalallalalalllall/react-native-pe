import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import Constance from '../Resources/Constance'
import Services from '../Services'

const { _check_version } = Services

const { APP_NAME } = Constance.app
const { STATUS_LOGIN, STATUS_NOT_LOGIN } = Constance.status
const { BACKGROUND_COLOUR } = Constance.ui
const { LOADING_MSG, UPDATING_MSG, VERSION_CHECKING_MSG } = Constance.message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOUR,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
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
    state = {
        message: LOADING_MSG
    }
    async componentDidMount() {
        this.setState({message : VERSION_CHECKING_MSG })
        var versionStatus = await _check_version();
        if(!versionStatus){
            // do updating or somethings 
        }
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
                <Text style={styles.title} >{this.state.message}</Text>
            </View>
        )
    }
}

export default Loading