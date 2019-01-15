import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Constance from '../Resources/Constance'
const { BUTTON_COLOR_NEW_VIDEO, BUTTON_COLOR_SEEN_VIDEO } = Constance.ui

const addLogo = require('../Resources/img/NewLogo.png')
const deleteLogo = require('../Resources/img/LoginLogo.png')
const addActionLogo = require('../Resources/img/MainLogo.png')
const deleteActionLogo = require('../Resources/img/MainLogo.png')
export class Friend extends Component {
    state = {
        type: '',
        logo: '',
        pressLogo: ''
    }
    componentDidMount = () => {
        this.setState({ type: this.props.type })
        let logo = addLogo
        let pressLogo = addActionLogo
        if (this.props.type == 'delete') {
            logo = deleteLogo
            pressLogo = deleteActionLogo
        } else if (this.props.type == 'add') {
            logo = addLogo
            pressLogo = addActionLogo
        }
        this.setState({ logo: logo, pressLogo: pressLogo })
    }
    onPress = async () => {
        this.setState({
            logo: this.state.pressLogo
        })
        Alert.alert(
            this.state.type == 'add' ? 'Friends Request' : 'Remove Friends',
            this.state.type == 'add' ? 'Confirm sending friend request to ' + this.props.name : 'Are you sure you want to delete ' + this.props.name,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('Sended') },
            ],
            { cancelable: false }
        )

    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.onPress}>
                        <Image style={styles.logo} source={this.state.logo}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' , justifyContent :'center'}}>
                    <Text>FOOOOOOOD{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        marginBottom: 10,
        backgroundColor: '#000'
    },
    button_send: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        marginBottom: 10,
        backgroundColor: BUTTON_COLOR_NEW_VIDEO
    },
    logo: {
        width: 110,
        height: 100
    }
})


export default Friend
