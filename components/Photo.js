import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Overlay, Image, Button } from 'react-native-elements';

const Photo = ({photo, closeOverlay}) => {
    return ( 
        <Overlay isVisible
            width="90%"
            height="auto"
        >
            <TouchableOpacity
                onPress={closeOverlay}
            >
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: photo.thumbnailUrl }}
                    />
                    <Text style={styles.name}>{photo.title}</Text>
                    <Button 
                       title="Regresar" 
                       onPress={closeOverlay}
                    />
                                 
                </View>
            </TouchableOpacity>
        </Overlay>
     );
}
 
const styles = StyleSheet.create({
    container: {
        margin: 30,
        alignItems: "center",
    },
     image: {
       width: 250,
       height: 250
     },
     name: {
        width: '100%',
        textAlign: 'center',
       marginVertical: 20,
       fontSize: 16,
       color: "#006400"
     },
     button: {
       paddingVertical: 10,
       paddingHorizontal: 30,
       fontSize: 25,
       paddingLeft: 20,
       width: 50
     },
     icon: {
       marginRight: 20
     }
 })

export default Photo;