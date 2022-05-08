import React from 'react';

const Searchbox = () => {
    return (
        <div className='w-full max-w-xl relative'>
            <span className='absolute left-4 top-3 text-lg text-gray-400'>
                <i className='fas fa-search'></i>
            </span>
        </div>
    );
}

export default Searchbox;
