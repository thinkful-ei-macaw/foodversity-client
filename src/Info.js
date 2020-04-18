import React from 'react';
import { Link } from 'react-router-dom';

function Info (){

    return( 
        <div className='Info'>
            <p>this is what the site is about</p>
        
        <Link id='start' to='/login'>
            <button type='button'>
                get started!
            </button>
        </Link>
        </div>
    )
}


export default Info;