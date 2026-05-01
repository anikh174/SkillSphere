import Image from 'next/image';
import React from 'react';
import bannerImg from "@/assets/banner.jpg"
import { FaPlay } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

const Banner = () => {
    return (
        <div className='bg-black'>
            <div className=' flex items-center p-5 lg:p-20 gap-10 flex-col-reverse md:flex-row justify-center container mx-auto'>
                <div className='text-center space-y-4 lg:space-y-8'>
                    <p className='text-sm font-semibold md:text-lg md:font-bold p-2 border border-orange-300 text-orange-400 w-50 md:w-65 mx-auto rounded-full bg-white'>New courses added weekly</p>
                    <div className='space-y-3 lg:space-y-5'>
                        <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white'>Upgrade Your Skills <span className='text-blue-100'>Today</span></h3>
                    <p className='text-gray-200 text-sm md:text-xl lg:text-2xl'>Learn from industry experts. Build real projects. Level up your career.</p>
                    </div>

                    <div className='flex gap-2 justify-center'>
                        <button className='btn flex items-center gap-1'><TbWorld className='h-5 w-5'/>Browse Courses</button>
                        <button className='btn flex items-center gap-1'><FaPlay />Watch Demo</button>
                    </div>
                </div>
                <Image src={bannerImg} alt='bannerImg' height={700} width={700} className='rounded-2xl shadow-md shadow-white'></Image>
            </div>
        </div>
    );
};

export default Banner;