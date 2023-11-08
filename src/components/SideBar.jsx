import React from 'react'
import About from './Main section/About'
import PrimaryFocus from './Main section/PrimaryFocus'

function SideBar() {
  return (
    <><div className=''>
    <div className=' bg-[#212121] text-white h-[630px] fixed w-60 rounded-3xl overflow-hidden p-6 ml-10 mt-8'>
        <img src="https://img.myloview.com/stickers/cartoon-character-boy-showing-the-peace-of-the-world-3d-rendering-700-173213275.jpg" className='rounded-2xl' alt="" />
        <h1 className='text-center mt-5 font-extrabold text-lg'>Hasme Rafsanjani</h1>
        <p className='text-center bg-slate-600 rounded-3xl boxsha items-center mt-3 pb-1 text-cyan-400'>Hello Friend ! 🙋‍♂️</p>
        <hr className='mt-5' />
        <div className='flex flex-col gap-6 mt-3'>
            <div className='flex'>
                <p className='text-4xl p-1'>⌛</p>
             <div>
             <h2 className='opacity-50'>AGE</h2>
            <h3>26 years old</h3>
             </div>
            </div>
            <div className='flex'>
                <p className='text-4xl p-1'>🏠</p>
             <div>
             <h2 className='opacity-50'>LOCATION</h2>
            <h3>West-bengal, INDIA</h3>
             </div>
            </div>
            <div className='flex'>
                <p className='text-4xl p-1'>🙎‍♂️</p>
             <div>
             <h2 className='opacity-50'>Personality-type</h2>
            <h3>Engineer</h3>
             </div>
            </div>
            <div className='flex justify-evenly'>
              <a href="https://www.instagram.com/hasme_rafsanjani/" target='_blank'>
                <img className='h-7 rounded' src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg" alt=" insta" />
              </a>
              <a href="https://github.com/Hasmerafsanjani" target='_blank'>
                <img className='h-7 rounded' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/hasme-rafsanjani-434286240/" target='_blank'>
                <img className='h-7 rounded' src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="linkedin" />
              </a>
              <a href="https://twitter.com/RafsanjaniHasme" target='_blank'>
                <img className='h-7 rounded' src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png" alt="twiter" />
              </a>
                
            </div>
        </div>
     </div>
     <div><About/></div>
     </div>
        </>
  )
}

export default SideBar