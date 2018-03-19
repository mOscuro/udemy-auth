import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header} from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAzbHt2PdH_vc5rDmWtaO_6u7fB_QKnQdY',
            authDomain: 'authentication-5ac57.firebaseapp.com',
            databaseURL: 'https://authentication-5ac57.firebaseio.com',
            projectId: 'authentication-5ac57',
            storageBucket: 'authentication-5ac57.appspot.com',
            messagingSenderId: '278517980778'
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;