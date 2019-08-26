import React, { Component } from 'react';
import { View , FlatList } from 'react-native'

import Cargando from '../components/Cargando';
import PhotosComponent from '../components/PhotosComponent';
import Photo from '../components/Photo'


class Photos extends Component {

    state = {
        photos: [],
        visible: false,
        photo: {},
        error: false
    }

    componentDidMount() {
        this.getPhotos()
    }

    getPhotos = async () => {

        try {
            const response = await fetch(this.props.apiPhoto)
            const photos = await response.json()

            this.setState({
                photos
            })
            
        } catch (error) {
            this.setState({
                error: true
            })
        }
    }

    goPhoto= async (id) => {

        try{
            const response = await fetch(`${'http://jsonplaceholder.typicode.com/photos/'}${id}`)

            const photo = await response.json()

            this.setState({
                photo
            })
        } catch(e) {

        }
        this.setState({
            visible: true
        })
    }

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
                    this.state.visible && (
                        <Photo photo ={this.state.photo} closeOverlay={this.closeOverlay} />
                    )
                }

                <FlatList 
                    keyExtractor={ (item) => item.id.toString()}
                    data={this.state.photos}
                    ListEmptyComponent={ () => <Cargando /> }
                    // ItemSeparatorComponent = { () => <Divider style={{ backgroundColor: 'blue' }} /> }
                    renderItem={ ({item}) => <PhotosComponent photo={item} goPhoto={this.goPhoto}/>}
                />
            </View>
        )
    }
}

export default Photos