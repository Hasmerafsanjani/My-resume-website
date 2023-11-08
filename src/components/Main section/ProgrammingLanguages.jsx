import React from 'react'

function ProgrammingLanguages() {
  return (
    <>
    <h1 className='text-2xl text-center font-bold p-6'>Programming Languages</h1>
    <div className='bg-gray-600  mx-12 py-6 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
    <div className='mx-6 pb-6 p-4'>     
        <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-amber-400 p-1">JavaScript</span>
        <span className="text-sm font-medium text-blue-700 dark:text-amber-400">80%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div className="bg-yellow-600 h-2.5 rounded-full w-[80%]"></div>
        </div>
    </div>
    <div className='mx-6 pb-6 p-4'>     
        <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-amber-400 p-1">Java</span>
        <span className="text-sm font-medium text-blue-700 dark:text-amber-400">65%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div className="bg-yellow-600 h-2.5 rounded-full w-[65%]"></div>
        </div>
    </div>
    <div className='mx-6 pb-6 p-4'>     
        <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-amber-400 p-1">HTML</span>
        <span className="text-sm font-medium text-blue-700 dark:text-amber-400">95%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div className="bg-yellow-600 h-2.5 rounded-full w-[95%]"></div>
        </div>
    </div>
    <div className='mx-6 pb-6 p-4'>     
        <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-amber-400 p-1">CSS</span>
        <span className="text-sm font-medium text-blue-700 dark:text-amber-400">90%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div className="bg-yellow-600 h-2.5 rounded-full w-[90%]"></div>
        </div>
    </div>
    <div className='mx-6 pb-6 p-4'>     
        <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-amber-400 p-1">SQL</span>
        <span className="text-sm font-medium text-blue-700 dark:text-amber-400">55%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div className="bg-yellow-600 h-2.5 rounded-full w-[55%]"></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProgrammingLanguages