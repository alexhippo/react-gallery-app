import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
    render() {
        return (
            <div className="photo-container">
                <h2>{this.props.title ? this.props.title : 'Results'}</h2>
                <ul>
                    {this.props.data.length > 0 ?
                        this.props.data.map((photo) => {
                            return <Photo server={photo.server} id={photo.id} key={photo.id} secret={photo.secret} />
                        })
                        :
                        <NotFound />
                    }
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;



