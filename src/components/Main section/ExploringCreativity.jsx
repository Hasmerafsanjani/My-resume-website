import React from 'react'

function ExploringCreativity() {
  return (
    <>
     <div>
    <div className='text-2xl text-center  m-10 font-bold'>Exploring Creativity
    </div>
    <div className='flex flex-wrap justify-evenly'>
    <div>
        <div className='h-36 flex w-[420px] rounded-2xl m-4 text-white bg-lime-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
        <img className='h-9 w-9 m-4 rounded' src="https://truscribe.com/wp-content/uploads/2019/10/TruScribe-Social-visualstory.jpg" alt="" />
        <div className='p-3 '>
            <h1 className='font-bold text-xl'>Visual Storytelling</h1>
            <p className='pt-3'>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
            </div>
        </div>
    </div>
    <div>
        <div className='h-36 flex w-[420px] rounded-2xl m-4 text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-lime-800'>
        <img className='h-9 rounded m-4' src="https://media.istockphoto.com/id/1313827686/vector/streamline-social-media-algorithms-engaging-contents-for-influencers-increase-organic-reach.jpg?s=612x612&w=0&k=20&c=sir0x25mE0XXjebrr-SDHnqieQdTqRYUOedffLlX84I=" alt="" />
        <div className='p-3 '>
            <h1 className=' font-bold text-xl'>Digital Content Creation</h1>
            <p className='pt-3'>Creatiing dynamic digital content, such as 3D models, graphics or animations.</p>
            </div>

        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default ExploringCreativity