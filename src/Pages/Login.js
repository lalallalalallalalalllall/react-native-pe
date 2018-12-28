import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Services from '../Services'
import Constance from '../Resources/Constance'

const { LOGIN_ERROR } = Constance.message

const { _login } = Services

export class Login extends Component {

    state = {
        phoneNumber: '',
        password: '',
        message: ''
    }

    login = async () => {
        var result = await _login(this.state.phoneNumber, this.state.password)
        if (result == null) {
            this.setState({
                message: LOGIN_ERROR
            })
            this.setState({
                password: ''
            })
        }else{
            console.log(this.props)
            //save it into async storage
            await this.props.screenProps.storeUserInfo(result)

            console.log(await this.props.screenProps.userInfo())
            //navigate to the main swipper pages
            this.props.navigation.navigate("MainSwiper")

        }
        
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Login Pages </Text>
                <TextInput
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    placeholderTextColor='rgba(0,0,0,0.1)'
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    style={styles.input}
                    value={this.state.phoneNumber}
                    onChangeText={val => { this.onChangeText('phoneNumber', val) }}
                    onSubmitEditing={() => { this.passswordInput.focus() }}
                />
                <TextInput
                    ref={(input) => { this.passswordInput = input }}
                    name="password"
                    placeholderTextColor='rgba(0,0,0,0.1)'
                    placeholder="Enter your password"
                    secureTextEntry
                    value={this.state.password}
                    returnKeyType="go"
                    onChangeText={val => { this.onChangeText('password', val) }}
                    style={styles.input}
                />

                <Text onPress={this.login}>Login</Text>
            </View>
        )
    }
}


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
    input: {
        fontSize: 25,
        paddingHorizontal: 5,
        backgroundColor: '#E9FAF5',
        marginBottom: 10
    }
})




export default Login