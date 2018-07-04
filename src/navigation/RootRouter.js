import {createStackNavigator} from "react-navigation";

import Login from "../components/Login";
import MainRouter from "./MainRouter";

export default RootRouter = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            title: `Login`,
            headerBackTitle: null
        }),
    },
    Main: {
        screen: MainRouter,
        navigationOptions: () => ({
            title: `Main`,
            headerBackTitle: null
        }),
    }
});