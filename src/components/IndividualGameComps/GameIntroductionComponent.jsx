"use client"
import React from 'react'
import LeftComponent from './GameIntroductionComponent/LeftComponent'
import RightComponent from './GameIntroductionComponent/RightComponent'

const GameIntroductionComponent = () => {
  return (
    <div
    className='w-full mt-[20px] flex gap-[20px]'>

        <LeftComponent />

        <RightComponent />

    </div>
  )
}

export default GameIntroductionComponent