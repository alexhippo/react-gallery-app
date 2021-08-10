import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {

    render() {
        return (
            <div class="photo-container">
                <h2>Results</h2>
                <ul>
                    {this.props.data.map((photo) => {
                        return <Photo server={photo.server} id={photo.id} secret={photo.secret} />
                    })}
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;



