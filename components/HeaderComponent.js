import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'

function HeaderComponent () {
    return (
        <View>
            <Header 
                style={{ color: '#fff'}}
                centerComponent={{ text: 'Lista de Fotos', style:{ color: '#fff', fontSize: 25, paddingBottom: 20} } }
            />   
        </View>
    )
}

export default HeaderComponent