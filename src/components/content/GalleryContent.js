import React, { Component } from 'react';
import * as dropboxService from '../../services/dropbox.service';
import ImageGallery from 'react-image-gallery';

class GalleryContent extends Component {
    state = {
        files: [],
        galleryPhotos: []
    }

    onStateClear = () => {
        this.setState({
            files: [],
            galleryPhotos: []
        })
    }

    onGalleryLoad = () => {
        this.onStateClear();

        dropboxService.readdir('/Włochy')
            .then(
                json => {
                    this.setState({
                        files: json.response
                    }, () => {
                        if(json.response.length > 0) {
                            json.response.forEach((element) => {
                                dropboxService.readFile('/Włochy/' + element)
                                    .then(
                                        json => {
                                            let data = [json.response.data];

                                            this.setState({
                                                ...this.state,
                                                galleryPhotos: [...this.state.galleryPhotos, {imageSet: data}]
                                            }, () => {
                                                console.log(this.state);
                                            })
                                        }
                                    )
                                    .catch(error => {
                                        console.log(error.message);
                                    })
                            })
                        }
                    })
                }
            )
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div onClick={this.onGalleryLoad}>
                    XD
                </div>
                {this.state.galleryPhotos.length > 0 &&
                    <div>
                        <img src={this.state.galleryPhotos[0]} alt="img1" />
                    </div>
                }
            </div>
        );
    }
}

export default GalleryContent;