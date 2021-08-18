import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';
import Loading from './Loading';
import Error from './Error';
import PropTypes from 'prop-types';

const PhotoContainer = (props) => (
    <div className="photo-container">
        <h2>{props.title ? props.title : 'Results'}</h2>
        <ul>
            {
                (props.error)
                    ? <Error error={props.error} />
                    : (props.loading)
                        ? <Loading />
                        : (props.data.length > 0)
                            ? props.data.map((photo) => {
                                return <Photo
                                    server={photo.server}
                                    id={photo.id}
                                    key={photo.id}
                                    secret={photo.secret}
                                    title={photo.title}
                                />
                            })
                            : <NoResults />
            }
        </ul>
    </div>
)

PhotoContainer.propTypes = {
    title: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
    data: PropTypes.array
}

export default PhotoContainer;



