import React from 'react'
import PrimaryFocus from './PrimaryFocus'
import ExploringCreativity from './ExploringCreativity'
import ProgrammingLanguages from './ProgrammingLanguages'
import HumanLanguages from './HumanLanguages'
import SkillSideBar from './SkillSideBar'
import FavoriteActivities from './FavoriteActivities'


function About() {
  return (
    <>
    <div className=' overflow-hidden w-[1000px] bg-green-600  text-fuchsia-50 rounded-2xl ml-80 mt-5 mx-auto '>
      <div>
    <nav className='flex justify-between'>
      <div className='text-3xl font-extrabold underline mt-6 ml-11 decoration-8 decoration-green-400 underline-offset-{70px}'>About Me
      </div>
      <nav className=' flex gap-4 bg-gray-800 rounded-bl-2xl font-bold   p-5'>
        <p className='cursor-pointer text-blue-500'>About</p>
        <p className='cursor-pointer'>Certificates</p>
        <p className='cursor-pointer'>Project</p>
        <p className='cursor-pointer'>More</p>
        <p className='cursor-pointer'>Contact</p>
      </nav>
    </nav>
    <div>
      <br /><br />
      <p className='p-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga illo expedita, quidem earum veniam accusantium ut deleniti ea minima at molestias eum dicta! Doloremque tenetur saepe perspiciatis corporis est accusantium, itaque eaque doloribus eos cupiditate in minus ut ipsam commodi, quasi exercitationem voluptates omnis laudantium. Itaque voluptatem voluptas eligendi, numquam nisi fugit voluptates quisquam ipsam eveniet cupiditate quas nulla quibusdam adipisci repudiandae omnis, recusandae nostrum quod vitae dicta id amet vero delectus tempora tenetur. Itaque minus corporis, accusantium sequi quo ex ducimus quis? Magni harum tenetur dolorem enim, sunt velit. Deleniti ratione voluptatum a provident doloribus repellat voluptates quae.</p>
    </div>
    </div>
    <div>
        <PrimaryFocus/>
        <ExploringCreativity/>
        <ProgrammingLanguages/>
        <HumanLanguages/>
        <SkillSideBar/>
        <FavoriteActivities/>
      </div>  
    </div>

    </>
  )
}

export default About