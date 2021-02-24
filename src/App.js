import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator()

const screenOptions = {
    headerStyle: {
        backgroundColor: "#F4511E",
    },
    headerTintColor: "#FFF",
    headerTitleStyle: "bold",
}

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" screenOptions={ screenOptions }>
                <Stack.Screen
                    name="UserList"
                    component={ UserList }
                    options={({ navigation }) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => {
                                return (
                                    <Button
                                        onPress={() => navigation.navigate('UserForm')}
                                        type="clear"
                                        icon={<Icon name="plus" size={22} color="#fff" />}
                                    />
                                )
                            }
                        }
                    }}
                />

                <Stack.Screen
                    name="UserForm"
                    component={ UserForm }
                    options={{
                        title: "Formulário de Usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}