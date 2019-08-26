import React from 'react';
import { View , StyleSheet , ActivityIndicator } from 'react-native'


const Cargando = () => {
    return (  
        <View style={styles.cargando} >
            <ActivityIndicator 
                animating
                size={100} 
                color="#0000ff" 
            />

        </View>
    );
}

const styles = StyleSheet.create({
    cargando: {
        marginTop: 100
    }
})
 
export default Cargando;