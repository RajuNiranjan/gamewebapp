"use client"
import React from 'react'
import Review from './Review'

const ReviewComp = () => {
  return (
    <div
    className='w-full text-white'>

        <div
        className='w-full flex items-center justify-between'>

            <p
            className='font-[500] text-[44px]'>
                Reviews
            </p>

            <button
            name='write a review button'
            className='bg-[#7B25C1] rounded-full px-[20px] py-[10px]'>
                Write a review
            </button>

        </div>

        <div
        className='w-full flex flex-col gap-[6px]'>

            <Review />
            
            <Review />

            <Review />

        </div>

    </div>
  )
}

export default ReviewComp