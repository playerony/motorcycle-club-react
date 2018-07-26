import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

class GalleryContent extends Component {
    state = {
        files: [],
        galleryPhotos: []
    }

    componentDidMount = () => {
        this.onGalleryLoad();
    }

    onStateClear = () => {
        this.setState({
            files: [],
            galleryPhotos: []
        })
    }

    importAll(r) {
        return r.keys().map(r)
    }

    onGalleryLoad = () => {
        this.onStateClear();

        // dropboxService.readdir('/Włochy')
        //     .then(
        //         json => {
        //             this.setState({
        //                 files: json.response
        //             }, () => {
        //                 if(json.response.length > 0) {
        //                     json.response.forEach((element) => {
        //                         dropboxService.readFile('/Włochy/' + element)
        //                             .then(
        //                                 json => {
        //                                     let data = [json.response.data];

        //                                     console.log(data.toString('base64'))

        //                                     this.setState({
        //                                         ...this.state,
        //                                         galleryPhotos: [...this.state.galleryPhotos, data]
        //                                     }, () => {
        //                                         console.log(this.state);
        //                                     })
        //                                 }
        //                             )
        //                             .catch(error => {
        //                                 console.log(error.message);
        //                             })
        //                     })
        //                 }
        //             })
        //         }
        //     )
        //     .catch(error => {
        //         console.log(error);
        //     })

        let keys = this.importAll(require.context('../../static/img/', false, /\.(png|jpe?g|svg)$/))
        let galleryPhotos = [];

        keys.forEach((element, index) => {
            galleryPhotos.push({
                original: element,
                thumbnail: element
            })
        })

        this.setState({
            ...this.state,
            galleryPhotos
        })
    }

    render() {
        return (
            <div>
                {this.state.galleryPhotos.length > 0 &&
                    <div>
                        <ImageGallery items={this.state.galleryPhotos} disableThumbnailScroll={true} />
                    </div>
                }
            </div>
        );
    }
}

export default GalleryContent;