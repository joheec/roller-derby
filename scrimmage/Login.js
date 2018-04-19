import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            derbyName: '',
            password: '',
        };
        this.checkLogin.bind(this);
    }
    render() {
        const { navigate } = this.props.navigation;
        return <View style={ styles.page }>
            <Image 
                source={ require('./logo.png') }
                style={ styles.logo }
            />
            <TextInput
                style={ styles.input }
                placeholder="Derby Name"
                onChangeText={ derbyName => this.setState({ derbyName }) }
            />
            <TextInput
                style={ styles.input }
                placeholder="Password"
                secureTextEntry={ true }
                onChangeText={ password => this.setState({ password }) }
            />
            <TouchableOpacity
                onPress={() => {
                    this.checkLogin();
                    navigate('Main');
                }}>
                <Text style={ styles.button }>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>; 
    }
    checkLogin() {
        // Alert.alert(this.state.derbyName);
        // fetch("http://192.168.1.67:3000/login", {
        //     method: "POST",
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: {
        //         derbyName: this.state.derbyName.toLowerCase(),
        //         password: this.state.password,
        //     }
        // })
        // .then(res => res.json());
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        margin: 20,
        height: 200,
        width: 200,
    },
    input: {
        height: 40,
        width: '80%',
        margin: 10,
        padding: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#e6518e',
    },
    button: {
        color: '#ffffff',
        borderRadius: 10,
        backgroundColor: '#e6518e',
        padding: 10,
        overflow: 'hidden',
    },
});
