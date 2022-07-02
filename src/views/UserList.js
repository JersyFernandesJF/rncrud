import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from '@rneui/themed'
import users from '../data/users'


export default props => {
    
    function getUserItem ({ item: user}) {
        return(
            <ListItem 
              leftAvatar = {{ source: { uri: user.avatarUrl}}}
               key= { user.id }
               title = {user.name}
               subtitle= {user.email}
               bottomDivider
               onPress={()=> props.navigation.navigate('UserForm')}
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