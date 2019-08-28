import React, { Component } from 'react';
import { View , FlatList } from 'react-native'

import Cargando from '../components/Cargando';
import PhotosComponent from '../components/PhotosComponent';
import Photo from '../components/Photo'


class Photos extends Component {

    state = {
        photos: [], // tendrá todas la fotos
        visible: false, // mostrar el modal
        photo: {}, // tendrá una sola foto
        error: false // Error al consultar el api
    }

    componentDidMount() {
        this.getPhotos()
    }

    // función que consulta el api y obteniendo todos las fotos
    getPhotos = async () => {

        try {
            // consultando el api
            const response = await fetch(this.props.apiPhoto)
            const photos = await response.json()

            // guardando los resultados obtenidos en el state
            this.setState({
                photos
            })
            
        } catch (error) {
            this.setState({
                error: true
            })
        }
    }

    // consultando el api y obteniendo una foto
    goPhoto= async (id) => {

        try{

             // consultando el api
            const response = await fetch(`${'http://jsonplaceholder.typicode.com/photos/'}${id}`)
            const photo = await response.json()

            // guardando los datos obtenidos en el state 
            this.setState({
                photo,
                visible: true // cambiando el estado para mostrar el modal
            })
        } catch(e) {
            console.log(e)
        }
    
    }

    // funcion para cerrar el modal
    closeOverlay = () => {
        this.setState({
            visible: false
        })
    }

    render() {

        return(
            <View 
                style={{ margin: 30 }}
            >

                {
                    // validando si visible es true mostrará el modal con el resultado de una foto
                    this.state.visible && (
                        // componente para mostrar una foto
                        <Photo photo ={this.state.photo} closeOverlay={this.closeOverlay} />
                    )
                }

                {/* Creando un listado con las fotos */}
                    <FlatList  
                        keyExtractor={ (item) => item.id.toString()} // obtener el id de cada resultado o foto
                        data={this.state.photos} // recibirá el arreglo con el resultado o todas las fotos
                        ListEmptyComponent={ () => <Cargando /> } // cuando se esten cargando los datos
                        // ItemSeparatorComponent = { () => <Divider style={{ backgroundColor: 'blue' }} /> } // si desea colocar un separador en cada item
                        renderItem={ ({item}) => ( // para mostrar los datos de cada item
                            <PhotosComponent // componente para mostrar los datos
                                photo={item} 
                                goPhoto={this.goPhoto}
                            /> 
                        )
                } 
                />
            </View>
        )
    }
}

export default Photos