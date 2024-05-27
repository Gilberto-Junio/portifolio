import projectChat from "../assets/project-chat.png"
import { SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { Button } from "./ui/button"

function Projects() {
  return (
    <div id='projectscontent' className="flex flex-col w-full items-center px-8 py-7 bg-gray-300 dark:bg-gray-800 sm:rounded-md transition-all">
      <p className="text-2xl text-red-500 dark:text-red-400 font-bold mb-5">
        Projetos
      </p>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center">

        <div className="flex flex-col rounded-md items-center w-[95%] lg:w-[50%]">
          <img className="rounded-t-md" src={projectChat} alt="Chat project" />
          <div className="flex flex-col bg-gray-200 dark:bg-gray-700 rounded-b-md p-5 space-y-5">
            <div className="flex justify-evenly">
              <FaReact className='text-2xl text-red-500 dark:text-red-400'/>
              <SiTypescript className='text-2xl text-red-500 dark:text-red-400'/>
              <SiShadcnui className='text-2xl text-red-500 dark:text-red-400'/>
              <SiTailwindcss className='text-2xl text-red-500 dark:text-red-400'/>
            </div>
            <p>
              Template frontend construido em React, Typescript, Tailwindcss e Shadcn/ui, insparado no Whatsapp. Serviu de base para um projeto hoje em produção. 
            </p>
            <div className="flex flex-wrap justify-evenly">
              <a href="https://gilberto-junio.github.io/react-chat-template/" target="_blank">
                <Button className="min-w-36 text-white bg-red-500 hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-500">
                  Ver projeto
                </Button>
              </a>
              <a href="https://github.com/Gilberto-Junio/react-chat-template" target="_blank">
                <Button className="min-w-36 text-white bg-red-500 hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-500">
                  {'< Repositório />'}
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col rounded-md items-center">
          <img className="rounded-t-md" src={projectChat} alt="Chat project" />
          <div className="flex flex-col bg-gray-200 dark:bg-gray-700 rounded-b-md p-5 space-y-5">
            <div className="flex justify-evenly">
              <FaReact className='text-2xl text-red-500 dark:text-red-400'/>
              <SiTypescript className='text-2xl text-red-500 dark:text-red-400'/>
              <SiShadcnui className='text-2xl text-red-500 dark:text-red-400'/>
              <SiTailwindcss className='text-2xl text-red-500 dark:text-red-400'/>
              <FaNodeJs className='text-2xl text-red-500 dark:text-red-400'/>
            </div>
            <p>
              Template frontend construido em React, Typescript, Tailwindcss, Shadcn/ui e uma api feita em nodejs que informa o endereço de uma latitude e longitude. 
            </p>
            <div className="flex flex-wrap">
              <Button>
                Projeto
              </Button>
              <Button>
                {'< Repositório />'}
              </Button>
            </div>
          </div>
        </div> */}
        
      </div>
    </div>
  )
}

export default Projects