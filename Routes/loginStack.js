import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../screens/login';
import Signup from '../screens/Signup';

const screens = {
    Login: {
        screen : Login
    },

    Signup: {
        screen : Signup
    }
}



const loginStack = createStackNavigator(screens);

export default createAppContainer(loginStack);