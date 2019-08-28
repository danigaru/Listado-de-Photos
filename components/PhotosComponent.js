import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Button, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

// realizando destructuring a los props
const PhotosComponent = ({ photo, goPhoto }) => {
  return (
    <View>
      {/* Evento cuando el usaurio presione en cada resultado */}
      <TouchableOpacity
        onPress={() => goPhoto(photo.id)} // evento para visualizar una foto
      >
        <Card>
          <View style={styles.contenedor}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: photo.thumbnailUrl }}
            />

            <Text style={styles.name}>{photo.title}</Text>
            <Button
              style={styles.button}
              icon={
                <Icon
                  style={styles.icon}
                  name="camera"
                  size={20}
                  color="white"
                  />
                }
                title="Ver más"
                onPress={() => goPhoto( photo.id) }  // evento para visualizar una foto
            />
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  image: {
    width: 250,
    height: 250
  },
  name: {
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
});
export default PhotosComponent;
