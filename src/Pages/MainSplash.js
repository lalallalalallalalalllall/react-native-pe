import React, { Component } from 'react'
import { Text, View, Image, StyleSheet , TouchableWithoutFeedback} from 'react-native'

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


export class MainSplash extends Component {
    logout = async () => {
        this.props.screenProps.removeUserInfo()
        this.props.navigation.navigate("Loading")
    }
    render() {
        return (
            <TouchableWithoutFeedback delayLongPress={1000} onLongPress={this.logout} onPress={this.logout} disabled={false}>
            <View style={styles.container} >
                <Image style={styles.logo} source={require('../Resources/img/MainLogo.png')}></Image>
                <Text style={styles.title}>SOME_COLOURFUL_SCREEN</Text>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default MainSplash