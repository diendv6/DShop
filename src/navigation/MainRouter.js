import {createBottomTabNavigator} from "react-navigation";

import Home from "../components/Home";
import Cart from "../components/Cart";
import Me from "../components/Me";

export default MainRouter = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Cart: {
        screen: Cart
    },
    Me: {
        screen: Me
    }
});