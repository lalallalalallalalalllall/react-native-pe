import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CodePin from 'react-native-pin-code'
import Constance from '../Resources/Constance'
const { BACKGROUND_COLOUR, DEFAULT_TEXT_COLOUR } = Constance.ui
const { FAIL_VERIFICATION } = Constance.message
export class Verification extends Component {
    state = {
        verificationCode : 8888, //default value
    }
    componentWillMount() {
        this.setState({ verificationCode: this.props.navigation.state.params.registrationKey })
    }
    resentVerification = async () => {
        console.log("resending verification")
        //calling resent to phone 
    }
    activateLogin = async () => {
        //activate account
        console.log('adasdasdas')
        //redirect to main swiper
        this.props.navigation.navigate({
            routeName: 'MainSwiper', params: {
                userkey: 'asdasd'
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <CodePin
                    containerStyle={styles.codePinContainer}
                    keyboardType="numeric"
                    code={this.state.verificationCode} // code.length is used if you not pass number prop
                    success={this.activateLogin} // If user fill '2018', success is called
                    text="Verification Code" // My title
                    error={FAIL_VERIFICATION} // If user fail (fill '2017' for instance)
                    autoFocusFirst={false} // disabling auto-focus
                />
                <Text onPress={() => { this.resentVerification(this.props.navigation.state.params.registrationKey) }}>Resend</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOUR,
    },
    codePinContainer: {
        // height: '30%',
        width: '100%',
        backgroundColor: BACKGROUND_COLOUR
    }
})

export default Verification
