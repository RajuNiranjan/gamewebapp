"use client"
import React from 'react'
import ratings from '@/asserts/ratings.png'
import Image from 'next/image'

const Review = () => {
    return (
        <div
            className='w-full px-[20px] py-[10px] border border-[#3F5EFBA6] rounded flex flex-col gap-[10px] bg-[#151515]'>

            <div className='flex items-center gap-[20px]'>

                <p
                    className='text-[#AEAEAE] text-[14px]'>
                    CyberNina April 1st 2022
                </p>

                <Image
                    src={ratings}
                    alt="rating" />

            </div>

            <p
                className='font-[500] text-[16px]'>
                I love exploring the virtual world
            </p>

            <p
                className='font-[400] text-[16px]'>
                Lorem ipsum dolor sit amet consectetur. Ac consectetur ut risus bibendum odio est dui aliquet. Tristique porttitor neque ipsum porta. Quis sed urna magna auctor. Et viverra id scelerisque sed. Lobortis venenatis lorem ante bibendum. Sed sed nunc libero
            </p>

        </div>
    )
}

export default Review