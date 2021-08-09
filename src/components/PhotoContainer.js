import React, { Component } from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

class PhotoContainer extends Component {
    render() {
        return (
            <div class="photo-container">
                <h2>Results</h2>
                <ul>
                    <Photo />
                    <NotFound />
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;



