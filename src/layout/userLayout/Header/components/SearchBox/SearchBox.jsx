import React from 'react';

const Searchbox = () => {
    return (
        <div className='w-full max-w-xl relative'>
            <span className='absolute left-4 top-3 text-lg text-gray-400'>
                <i className='fas fa-search'></i>
            </span>
            <input type="text"
                    className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                    placeholder="search"></input>
        </div>
    );
}

export default Searchbox;
