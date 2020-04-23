import React from 'react';

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
           <p 
                className='f3 link dim black pa3' 
                style={{cursor: 'pointer'}}
            >
                {'Sign In'}
            </p>
            <p 
                className='f3 link dim black pa3' 
                style={{cursor: 'pointer'}}
            >
                {'Register'}
            </p>
        </nav>
    )
}

export default Navigation;