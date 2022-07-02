import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
   

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o E-mail"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />
               <Button
                title="Salvar"
                onPress={() => {
                    
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})