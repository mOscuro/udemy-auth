import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    
    state = {
        email: '',
        password: ''
    };

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="example@gmail.com"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="pass***123"
                        secureTextEntry
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        />
                </CardSection>

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }


}

export default LoginForm;