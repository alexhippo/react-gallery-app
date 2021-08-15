import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {
    render() {
        if (this.props.data.length > 0) {
            return (
                <div className="photo-container">
                    <h2>{this.props.title ? this.props.title : 'Results'}</h2>
                    <ul>
                        {this.props.data.map((photo) => {
                            return <Photo server={photo.server} id={photo.id} key={photo.id} secret={photo.secret} />
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="photo-container">
                    <ul>
                        <li class="not-found">
                            <h3>No Results Found</h3>
                            <p>Your search did not return any results. Please try again.</p>
                        </li>
                    </ul>
                </div>
            );
        }

    }
}

export default PhotoContainer;



