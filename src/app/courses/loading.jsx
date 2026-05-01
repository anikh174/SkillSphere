import React from 'react';

const LoadingDetailPage = () => {
    return (
        <div className='h-[60vh] flex justify-center items-center bg-black text-white gap-3 pt-20'>
           <span className="loading loading-spinner text-accent"></span> loading...
        </div>
    );
};

export default LoadingDetailPage;