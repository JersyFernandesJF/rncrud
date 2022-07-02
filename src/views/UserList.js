import React from 'react'
import { Text, View, FlatList, Alert } from 'react-native'
import { ListItem } from '@rneui/themed'
import users from '../data/users'


export default props => {
    
    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => {}}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem ({ item: user}) {
        return(
            <ListItem 
              leftAvatar = {{ source: { uri: user.avatarUrl}}}
               key= { user.id }
               title = {user.name}
               subtitle= {user.email}
               bottomDivider
               onPress={()=> props.navigation.navigate('UserForm', user)}
            />
        )
    }

    return(
       <View>
        <FlatList
            keyExtractor={users => users.id.toString()}
            data={users}
            renderItem={getUserItem}
        />
       </View>
    )
}