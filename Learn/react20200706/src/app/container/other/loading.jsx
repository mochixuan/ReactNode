import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({isLoading, error}) => {
    if (isLoading) {
        return <ReactLoading type={'spin'} color={'blue'} height={667} width={375} />
    } else if (error) {
        return <span>Loading Error</span>
    } else {
        return <span>Loading Empty</span>
    }
};

export {Loading}