import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBF3EC',
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
export class Splash2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../Resources/img/MainLogo.png')}></Image>
                <Text style={styles.title}> Splash Screen2  </Text>
            </View>
        )
    }
}

export default Splash2