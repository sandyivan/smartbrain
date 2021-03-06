import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonClick }) => {
    return(
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your photos. Give it a try'}
            </p>
            <div className='center form'>
                <div className='pa3'>
                    <input 
                        id='myInput' 
                        onChange={onInputChange}
                        className='f4 pa2 w-70' 
                        type='text'/>
                    <button 
                        onClick={onButtonClick}
                        className='w-30 grow f4 link ph3 pv2 dib  white bg-light-purple'>
                        {'Detect'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;