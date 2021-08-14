import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {

    state = {
        searchTerm: this.props.searchTerm
    }

    onResultsChange = (e) => {
        this.props.onSearch(this.state.searchTerm);
    }

    render() {
        return (
            <div className="photo-container" onChange={this.onResultsChange}>
                <h2>Results</h2>
                <ul>
                    {this.props.data.map((photo) => {
                        return <Photo server={photo.server} id={photo.id} key={photo.id} secret={photo.secret} />
                    })}
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;



