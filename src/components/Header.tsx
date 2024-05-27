import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"
import { FaBars } from "react-icons/fa"

function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="flex flex-col sm:flex-row px-14 py-7 w-full items-center justify-between bg-gray-300 dark:bg-gray-800 sm:rounded-md transition-all">
        <div className="flex flex-row w-full justify-between">
            <p className="font-bold text-3xl w-12">
                <span className="text-red-500 dark:text-red-400">GJ</span>.
            </p>
            <div className="hidden sm:flex items-center space-x-10">
                <a 
                    href="#homecontent" 
                    className="border-b-2 border-opacity-0 border-red-500 hover:text-red-500 dark:border-opacity-0 dark:border-red-400 dark:hover:text-red-400 hover:border-opacity-100 dark:hover:border-opacity-100 hover:scale-110 transition-all"
                >
                    Home
                </a>
                <a 
                    href="#aboutcontent" 
                    className="border-b-2 border-opacity-0 border-red-500 hover:text-red-500 dark:border-opacity-0 dark:border-red-400 dark:hover:text-red-400 hover:border-opacity-100 dark:hover:border-opacity-100 hover:scale-110 transition-all"
                >
                    Sobre mim
                </a>
                <a 
                    href="#skillscontent" 
                    className="border-b-2 border-opacity-0 border-red-500 hover:text-red-500 dark:border-opacity-0 dark:border-red-400 dark:hover:text-red-400 hover:border-opacity-100 dark:hover:border-opacity-100 hover:scale-110 transition-all"
                >
                    Conhecimentos
                </a>
                <a 
                    href="#projectscontent" 
                    className="border-b-2 border-opacity-0 border-red-500 hover:text-red-500 dark:border-opacity-0 dark:border-red-400 dark:hover:text-red-400 hover:border-opacity-100 dark:hover:border-opacity-100 hover:scale-110 transition-all"
                >
                    Projetos
                </a>
                <a 
                    href="#contactcontent" 
                    className="border-b-2 border-opacity-0 border-red-500 hover:text-red-500 dark:border-opacity-0 dark:border-red-400 dark:hover:text-red-400 hover:border-opacity-100 dark:hover:border-opacity-100 hover:scale-110 transition-all"
                >
                    Contato
                </a>
            </div>
            <div className=" items-center space-x-10">
                <ThemeToggle />
            </div>
            <div className="flex sm:hidden items-center justify-end space-x-10 w-12">
                <FaBars className="text-2xl text-red-500 dark:text-red-400 hover:scale-105 transition-all hover:cursor-pointer" onClick={() => setShowMenu(!showMenu)}/>
            </div>
        </div>
        {showMenu && 
            <>
                <div className="flex flex-col w-full sm:hidden justify-start mt-5">
                    <a 
                        href="#homecontent" 
                        className="border-b-2 border-opacity-0 text-left border-red-400 hover:text-red-400 hover:border-opacity-100 hover:scale-110 transition-all"
                        onClick={() => setShowMenu(false)}
                    >
                        Home
                    </a>
                    <a 
                        href="#aboutcontent" 
                        className="border-b-2 border-opacity-0 text-left border-red-400 hover:text-red-400 hover:border-opacity-100 hover:scale-110 transition-all"
                        onClick={() => setShowMenu(false)}
                    >
                        Sobre mim
                    </a>
                    <a 
                        href="#skillscontent" 
                        className="border-b-2 border-opacity-0 text-left border-red-400 hover:text-red-400 hover:border-opacity-100 hover:scale-110 transition-all"
                        onClick={() => setShowMenu(false)}
                    >
                        Conhecimentos
                    </a>
                    <a 
                        href="#projectscontent" 
                        className="border-b-2 border-opacity-0 text-left border-red-400 hover:text-red-400 hover:border-opacity-100 hover:scale-110 transition-all"
                        onClick={() => setShowMenu(false)}
                    >
                        Projetos
                    </a>
                    <a 
                        href="#contactcontent" 
                        className="border-b-2 border-opacity-0 text-left border-red-400 hover:text-red-400 hover:border-opacity-100 hover:scale-110 transition-all"
                        onClick={() => setShowMenu(false)}
                    >
                        Contato
                    </a>
                </div>
            </>
            }
    </div>
  )
}

export default Header