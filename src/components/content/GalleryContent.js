import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import photos from '../../utils/ImageLoader';
import 'react-image-gallery/styles/css/image-gallery.css';
import './GalleryContent.scss';

class GalleryContent extends Component {
    state = {
        files: []
    }

    componentDidMount = () => {
        this.loadFiles();
    }

    loadFiles = () => {
        let files = [];

        photos.forEach((element) => {
            files.push({
                original: element,
                thumbnail: element
            });
        });

        this.setState({
            files
        });
    }

    render() {
        return (
            <div className="gallery-wrapper" id="gallery">
                {this.state.files.length > 0 &&
                    <ImageGallery items={this.state.files} autoPlay={true} />
                }
            </div>
        );
    }
}

export default GalleryContent;