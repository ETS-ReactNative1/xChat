//Importing the StackNavigator creator
import { createStackNavigator } from '@react-navigation/stack';

//GettingScreens
import LoginScreen from '../screens/LoginScreen';   //Login screen import
import Stories from '../screens/Stories';           //Stories screen import


//Getting the stack
const Stack = createStackNavigator();

//Declarating stack
//? Hint: <Stack.Screen name="Settings" component={Settings} />

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}

