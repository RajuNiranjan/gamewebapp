"use client"
import React from 'react'
import TwitterIcon from '@/asserts/twitter.png'
import RedditIcon from '@/asserts/reddit.png'
import Image from 'next/image'
import RightSideChatComp from './RightSideChatComp'

const RightComponent = () => {
  return (
    <div
    className='w-[40%] bg-[#212121] py-[20px] px-[10px] h-fit'>

        <div
        className='text-white text-[19px] font-[700] flex items-center gap-[40px]'>

            <div
            className='flex items-center gap-[8px] relative before:absolute before:w-full before:h-[2px] before:bottom-[-10px] before:bg-[#3F5EFB}'>

                <Image
                src={TwitterIcon}
                alt='Twitter Icon'
                className='w-[33px] h-[33px]' />

                <p>
                    Twitter
                </p>

            </div>

            <div
            className='flex items-center gap-[8px]'>

                <Image
                src={RedditIcon}
                alt='Reddit Icon'
                className='w-[22px] h-[26px]' />

                <p>
                    Reddit
                </p>

            </div>

        </div>

        <div
        className='mt-[30px] w-full'>

            <div
            className='w-full'>

                <RightSideChatComp />

                <RightSideChatComp />
                
                <RightSideChatComp />

            </div>

        </div>

    </div>
  )
}

export default RightComponent