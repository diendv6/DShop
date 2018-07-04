import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import RootRouter from "../navigation/RootRouter"

type Props = {};
export default class Login extends Component<Props> {
    constructor(Props){
        super(Props);
    }

    _doLogin = () =>{
        this.props.navigation.navigate('Main');
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Login - Component
                </Text>
                <TouchableOpacity onPress={this._doLogin}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});