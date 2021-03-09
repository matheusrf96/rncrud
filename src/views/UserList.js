import React from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

import users from '../data/users'

export default props => {
    const getUserItem = ({item: user}) => {
        return (
            <ListItem
                key={user.id}
                onPress={() => props.navigation.navigate('UserForm')}
                bottomDivider
            >
                <Avatar source={{uri: user.avatarUrl}} rounded large />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            ></FlatList>
        </View>
    )
}
