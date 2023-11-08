
import React from 'react'
import github from './Skills/github.jpg'
import sql from './Skills/sql.jpg'
import act from './Skills/react.png'
import javaact from './Skills/java.jpg'
import javasctipt from './Skills/javascript.png'
import AI from './Skills/AI.png'
import css from './Skills/css.png'
import git from './Skills/photoshop.png'
import phs from './Skills/img.png'
import tailwind from './Skills/tailwind.png'
import  premier from './Skills/premier.png'
import  html from './Skills/html.png'
import  figma from './Skills/figma.png'
import  cad from './Skills/cad.png'
import ubantu from './Skills/ubonto.jpg'



function SkillSideBar() {
    return (
      <>
        <h1 className='text-3xl text-center font-bold p-4 m-4'>Devlopment and Software Skills</h1>
      <div className="App text-center bg-green-400 mx-12 mb-5 px-4 py-7 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-2xl">
        <div className='gap-4 flex flex-wrap  justify-center  '>
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={github} alt="Github" />  
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={sql} alt="sql" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={act} alt="react" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={javaact} alt="java" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={javasctipt} alt="javascript" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={AI} alt="AI" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={css} alt="css" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={git} alt="photoshop" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={phs} alt="PS" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={tailwind} alt="tailwind" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={premier} alt="premier" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={html} alt="html" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={figma} alt="html" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={cad} alt="html" />
          <img className='h-40 rounded-3xl hover:scale-110 hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src={ubantu} alt="html" />
        </div>
      </div>
      </>
    );
  
}

export default SkillSideBar