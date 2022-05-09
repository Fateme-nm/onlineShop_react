import React from 'react';

const Botton = ({children}) => {
    return (
        <button className="py-3 px-20 bg-primary rounded-md text-white font-bold text-lg mt-8 transform hover:translate-y-1 transition-all duration-500 w-full text-center">
            {children}
        </button>
    );
}

export default Botton;
