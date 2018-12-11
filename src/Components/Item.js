import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export class Item extends Component {


    onPress = () => {
        console.log("on press properties", this.props)

        this.props.runFunction(this.props.link, this.props.color)
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                    <Text>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    container2: {
        padding: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        marginBottom: 10,
        backgroundColor: "#336EFF"
    },
    floatight: {
        textAlign: 'right'
    }
})

export default Item


