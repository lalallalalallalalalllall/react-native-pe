import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Constance from '../Resources/Constance' 
const  {BUTTON_COLOR_NEW_VIDEO , BUTTON_COLOR_SEEN_VIDEO} = Constance.ui
export class Item extends Component {

    onPress = () => {
        this.props.runFunction(this.props.link, this.props.color , this.props.colorName ,this.props.createdAt ,  this.props.id)
    }
    render() {
        console.log('item', this.props)
        return (
            <View style={this.props.index % 2 == 1?styles.container_left:styles.container_right}>
                <TouchableOpacity style={this.props.seen ? styles.button_seen :styles.button_new} onPress={this.onPress}>
                    <Text>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container_left: {
        alignItems  : 'flex-start',
        padding: 20,
    },
    container_right: {
        alignItems  : 'flex-end',
        padding: 20,
    },
    button_new: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        marginBottom: 10,
        backgroundColor: BUTTON_COLOR_NEW_VIDEO
    },
    button_seen: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        marginBottom: 10,
        backgroundColor: BUTTON_COLOR_SEEN_VIDEO
    },
    floatight: {
        textAlign: 'right'
    }
})

export default Item


