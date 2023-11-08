import React from 'react'

function HumanLanguages() {
  return (
    <>
    <h1 className='text-2xl text-center font-bold p-6'>Human Languages</h1>
    <div className='bg-cyan-700  mx-12  py-6 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
    <div className='mx-6 pb-6 p-4'>     
        <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-amber-400 p-1">Eglish</span>
    
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div className="bg-yellow-600 h-2.5 rounded-full w-[80%]"></div>
        </div>
    </div>
    <div className='mx-6 pb-6 p-4'>     
        <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-amber-400 p-1">Hindi</span>
       
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div className="bg-yellow-600 h-2.5 rounded-full w-[65%]"></div>
        </div>
    </div>
    <div className='mx-6 pb-6 p-4'>     
        <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-amber-400 p-1">Bengali (Native)</span>
 
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div className="bg-yellow-600 h-2.5 rounded-full w-[100%]"></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default HumanLanguages