import React from 'react';
import './ErrorMsg.css'

export default function UserList ({error}) {

        return (
            <div className='formError'>{error ? error : null}</div>
);

}
