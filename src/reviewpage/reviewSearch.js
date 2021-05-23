import React from 'react';
import { useParams } from 'react-router';

function ReviewSearch(){

    var params = useParams();
    const hashtag = params.hashtag;
    return(
        <div>{hashtag}</div>
    )
}

export default ReviewSearch;