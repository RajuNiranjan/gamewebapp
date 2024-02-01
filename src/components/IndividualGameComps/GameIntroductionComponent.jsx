"use client"
import React from 'react'
import LeftComponent from './GameIntroductionComponent/LeftComponent'
import RightComponent from './GameIntroductionComponent/RightComponent'
import ReviewComp from './GameIntroductionComponent/ReviewComp'
import Card from '@/ui/card'

const GameIntroductionComponent = () => {
  return (
    <div
      className='w-full mt-[20px]'>

      <div className='w-full flex gap-[20px]'>

        <LeftComponent />

        <RightComponent />

      </div>

      <div
      className='mt-[20px] w-[60%]'>

        <ReviewComp />

        <div className='text-white text-[43px] font-[500] mt-[20px]'>

          <p>
            Related <span className='text-[#3F5EFB]'>Games</span>
          </p>

          <div
          className='mt-[20px]'>

          </div>

        </div>

      </div>

    </div>
  )
}

export default GameIntroductionComponent