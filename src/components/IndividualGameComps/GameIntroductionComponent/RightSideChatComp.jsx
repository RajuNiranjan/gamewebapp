"use client"
import React from 'react'
import Image from 'next/image'
import profileIcon from '@/asserts/profileIcon.png'
import shareIcon from '@/asserts/ShareIcon.png'
import commentIcon from '@/asserts/CommentIcon.png'
import loveIcon from '@/asserts/LoveIcon.png'

const RightSideChatComp = () => {
  return (
    <div
      className='w-full h-fit text-white flex flex-col gap-[16px]'>

      <div
        className='flex items-center justify-between'>

        <Image
          src={profileIcon}
          alt='Profile icon'
          className='w-[48px] h-auto object-cover rounded-full' />

        <div
          className='flex items-center gap-[8px]'>

          <div
            className='flex flex-col'>

            <p
              className='text-[14px]'>
              Web3 Gaming Marketplace
            </p>

            <p
              className='font-[500] text-[14px] text-[#868484]'>
              @web3gamingmarketplace
            </p>

          </div>

          <div className='h-[21px] w-[1px] bg-white' />

          <p
            className='text-[14px]'>
            #web3gaming
          </p>

        </div>

        <p
          className='text-[14px] text-[#868484]'>
          17 hours ago
        </p>

      </div>

      <div>

        <p
        className='text-[14px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum, ullam reiciendis explicabo quis totam officiis doloribus inventore tenetur aliquid blanditiis labore dolore dignissimos pariatur! Voluptates explicabo vel velit excepturi obcaecati aperiam, doloremque culpa saepe praesentium nesciunt ipsum rerum aliquid deserunt dolore, cumque ratione. Cum molestias totam soluta quaerat maxime!
        </p>

      </div>

      <div
      className='w-full flex items-center justify-evenly'>

        <div
        className='text-[12px] text-[#868484] flex items-center gap-[8px]'>

          <Image
          src={commentIcon}
          alt='comment Icon'
          className='w-[14px] h-auto object-cover' />

          <p>
            10
          </p>

        </div>

        <div
        className='text-[12px] text-[#868484] flex items-center gap-[8px]'>

          <Image
          src={shareIcon}
          alt='Share Icon'
          className='w-[14px] h-auto object-cover' />

          <p>
            10
          </p>

        </div>

        <div
        className='text-[12px] text-[#868484] flex items-center gap-[8px]'>

          <Image
          src={loveIcon}
          alt='Love Icon'
          className='w-[14px] h-auto object-cover' />

          <p>
            10
          </p>

        </div>

      </div>

      <div
      className='w-full h-[2px] bg-[#474343] mb-[20px]' />

    </div>
  )
}

export default RightSideChatComp