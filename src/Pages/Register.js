import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableWithoutFeedback } from 'react-native'
import DatePicker from 'react-native-datepicker';
import Constance from '../Resources/Constance'
const { BACKGROUND_COLOUR, DEFAULT_TEXT_BOX_COLOUR } = Constance.ui
const ProceedButton = require('../Resources/img/ProceedButton.png')
export class Register extends Component {
  state = {
    date: '',
    password: '',
    name: '',
    phoneNumber: ''

  }

  onChangeText = (key, value) => {

    this.setState({
      [key]: value
    })
  }
  registerAccount = () => {
    console.log('date', this.state.date)
    console.log('password', this.state.password)
    console.log('name', this.state.name)
    console.log('phoneNumber', this.state.phoneNumber)
    console.log(this.props)
    this.props.navigation.navigate({ routeName: 'Verification', params: { registrationKey: '1234' } })
  }
  registerAccount = async () => {
    //do some validation here ?
    //call registration api

    // var result = await registrationApi(this.state.date, this.state.password, this.state.name, this.state.phoneNumber)
    // if(result.registrationKey){
    this.props.navigation.navigate('Verification', { registrationKey: '1234', phoneNo: this.state.phoneNumber })
    //}else{
    // this.setState({error : result.error })
    //}
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text> register page </Text> */}
        <TextInput
          name="name"
          placeholder="Enter your name"
          placeholderTextColor='rgba(0,0,0,0.1)'
          returnKeyType="next"
          style={styles.input}
          value={this.state.name}
          onChangeText={val => { this.onChangeText('name', val) }}
          onSubmitEditing={() => { this.phoneNumberInput.focus() }}
        />
        <TextInput
          ref={(input) => { this.phoneNumberInput = input }}
          name="phoneNumber"
          placeholder="Enter your phone number"
          placeholderTextColor='rgba(0,0,0,0.1)'
          keyboardType="phone-pad"
          returnKeyType="next"
          style={styles.input}
          value={this.state.phoneNumber}
          onChangeText={val => { this.onChangeText('phoneNumber', val) }}
          onSubmitEditing={() => { this.datePicker.onPressDate() }}
        />

        <DatePicker
          ref={(picker) => { this.datePicker = picker; }}
          style={styles.DatePickerBody}
          date={this.state.date}
          customStyles={{
            dateInput: styles.dateInput,
            placeholderText: {
              paddingTop: 5,
              color: 'rgba(0,0,0,0.1)',
              fontSize: 25,
              height: 50
            },
            dateTouchBody: { height: 50 },
            dateText: styles.dateText
          }}
          mode="date"
          androidMode="spinner"
          placeholder="Births date"
          format="YYYY-MM-DD"
          minDate="0000-01-01"
          maxDate="9999-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => {
            this.onChangeText('date', date)
          }}
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
        <TouchableWithoutFeedback onPress={this.registerAccount}>
          <Image style={styles.logo} source={ProceedButton} ></Image>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOUR,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2DA681',
    marginBottom: 10
  },
  DatePickerBody: {

    paddingHorizontal: 5,
    backgroundColor: DEFAULT_TEXT_BOX_COLOUR,
    marginBottom: 10,
    width: '80%',
    height: 50
  },
  input: {
    fontSize: 25,
    paddingHorizontal: 5,
    backgroundColor: DEFAULT_TEXT_BOX_COLOUR,
    marginBottom: 10,
    width: '80%',
    height: 50
  },
  dateInput: {
    marginTop: 10,
    borderWidth: 0,
    width: '80%',
    marginBottom: 10,
    backgroundColor: DEFAULT_TEXT_BOX_COLOUR,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50
  },
  dateText: {
    fontSize: 25,
    paddingTop: 10,
    height: 50
  },
  logo: {
    width: 175,
    height: 150,
    marginBottom: 10,
  }
})



export default Register