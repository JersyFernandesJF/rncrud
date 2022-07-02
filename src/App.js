import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from '@rneui/themed';


const Stack = createNativeStackNavigator();

export default props => {
    return (
            <NavigationContainer>
                <Stack.Navigator
                    screeenOptions = { screenOptions }
                    initialRouteName= "UserList">
                    <Stack.Screen 
                        name="UserList"
                        component={UserList}
                        options={() => {
                            return(
                                title: "Lista de Usuários",
                                hederRight: () => (
                                    <Button
                                        onPress = {() => navigation.navigate('UserForm')}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white"/>}
                                    />
                                )
                            )
                        }}
                    />
                    <Stack.Screen
                         name="UserForm"
                         component={UserForm}
                         options = {{
                            title: "Formulário de Usúarios"
                         }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

const screenOptions ={
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}