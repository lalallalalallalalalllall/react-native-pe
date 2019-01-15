import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native'
import SettingBox from '../Components/SettingBox'
const addLogo = require('../Resources/img/NewLogo.png')
const deleteLogo = require('../Resources/img/LoginLogo.png')
const otherLogo = require('../Resources/img/MainLogo.png')

export class Setting extends Component {
    addFriend = () => {
        alert('Add Friends')
        this.props.navigation.navigate('AddFriend')
    }
    deleteFriend = () => {
        alert('delete Friends')
        this.props.navigation.navigate('DeleteFriend')
    }
    other = () => {
        alert("other")
        this.props.navigation.navigate('MainSetting')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SettingBox color='yellow'></SettingBox>
                <SettingBox color='green'></SettingBox>
                <SettingBox color='black'></SettingBox>
                <SettingBox color='blue'></SettingBox>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <TouchableWithoutFeedback onPress={this.addFriend}>
                        <Image style={{
                               width: 110,
                               height: 100
                        }} source={addLogo} ></Image>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.deleteFriend}>
                        <Image style={{
                            width: 110,
                            height: 100
                        }} source={deleteLogo} ></Image>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.other}>
                        <Image style={{
                              width: 110,
                              height: 100
                        }} source={otherLogo} ></Image>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

export default Setting
