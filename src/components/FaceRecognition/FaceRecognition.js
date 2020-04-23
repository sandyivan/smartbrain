import React from 'react';


const FaceRecognition = ({imageUrl}) => {
    return(
        <div className='center ma'>
            <div>
                <img id='imageinput' alt='' src={imageUrl} width='500px' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecognition;