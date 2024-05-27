import { FaAngular, FaBootstrap, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiPostman, SiShadcnui, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si"


function Skills() {
  return (
    <div id='skillscontent' className="flex flex-col w-full items-center px-8 py-7 bg-gray-300 dark:bg-gray-800 sm:rounded-md transition-all">
        <p className="text-2xl text-red-500 dark:text-red-400 font-bold mb-5">
            Conhecimentos
        </p>
        <div className='flex flex-wrap justify-center'>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <FaHtml5 className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>HTML</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <FaCss3Alt className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>CSS</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <SiJavascript className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>JavaScript</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <SiTypescript className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>TypeScript</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <FaReact className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>React</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <FaAngular className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>Angular.js, Angular</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <SiTailwindcss className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>Tailwind</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <SiShadcnui className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>Shadcn/ui</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <SiStyledcomponents className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>Styledcomponents</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <FaBootstrap className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>Bootstrap</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <FaNodeJs className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>Node.js</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <SiMongodb className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>MongoDB</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <FaGithub className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>GitHub</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <FaDocker className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>Docker</p>
            </div>
            <div className='flex flex-col items-center px-5 xl:px-8 py-5 transition-all hover:text-red-500 dark:hover:text-red-400 hover:scale-110'>
                <SiPostman className='text-5xl text-red-500 dark:text-red-400'/>
                <p className='font-semibold'>Postman</p>
            </div>
        </div>
    </div>
  )
}

export default Skills