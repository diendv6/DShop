import React from "react"
import {createBottomTabNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../components/Home";
import Cart from "../components/Cart";
import Me from "../components/Me";
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    iconTab: {
        borderColor: 'rgba(255, 255, 255, 0.5)',
        width: width / 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const {width, height} = Dimensions.get('window');

const IconTab = (src, tintColor, title) => (
    <View style={{flex:1, flexDirection:'column',alignItems: 'center'}}>
        <Ionicons size={30} color={tintColor} name={src}/>
        <Text style={{fontSize: 14, color: tintColor, fontWeight: 'bold'}}>{title}</Text>
    </View>
);

export default MainRouter = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => IconTab('ios-home', tintColor, "Home")
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => IconTab('ios-basket', tintColor, "Cartgfgfgfg")
        }
    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => IconTab('ios-person', tintColor, "Me")
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: 'red',
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: 'blue',
        },
        indicatorStyle: {
            backgroundColor: 'black',
            height: 100
        },
        upperCaseLabel: false
    },
    animationEnabled: true,
    lazy: true,
    swipeEnabled: true,
});