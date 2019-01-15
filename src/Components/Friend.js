import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import Constance from '../Resources/Constance' 
const  {BUTTON_COLOR_NEW_VIDEO , BUTTON_COLOR_SEEN_VIDEO} = Constance.ui

export class Friend extends Component {
    state = { 
       send : false
      }
    onPress = async () => {
        alert("Video send to "+this.props.name)
        this.setState({send : true})
        if(this.props.options){
            console.log(this.props.options)
        }else{
            console.log(this.props.id)
            // share video to user with id 
            //await shareVideo(this.props.id)
        }
        // this.props.runFunction(this.props.link, this.props.color, this.props.colorName, this.props.createdAt, this.props.id)
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={this.state.send?styles.button_send:styles.button} onPress={this.onPress}>
                    <Text>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    button_send:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        marginBottom: 10,
        backgroundColor: BUTTON_COLOR_NEW_VIDEO
    }
})


export default Friend
