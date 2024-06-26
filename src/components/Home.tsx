import picture from "../assets/eu.jpg"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

function Home() {
  return (
    <div id="homecontent" className="flex flex-col sm:flex-row w-full items-center justify-between px-14 py-7 bg-gray-300 dark:bg-gray-800 sm:rounded-md transition-all">
        <div className="flex flex-col">
            <p className="text-2xl">
                Olá, me chamo Gilberto Junio
            </p>
            <p className="text-5xl pt-5 font-semibold text-red-500 dark:text-red-400">
                Desenvolvedor Front End
            </p>
            <p className="text-2xl pt-5 max-w-[80%]">
                Transformando ideias em experiências digitais, uma linha de código por vez.            
            </p>
            <div className="flex items-center justify-center sm:justify-start space-x-8 sm:space-x-3 py-7">
                <a href="https://www.linkedin.com/in/gilberto-junio-11bb8b15b/" target="_blank" className="text-4xl hover:text-red-500 dark:hover:text-red-400 hover:scale-110 transition-all">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/Gilberto-Junio" target="_blank" className="text-4xl hover:text-red-500 dark:hover:text-red-400 hover:scale-110 transition-all">
                    <FaGithub/>
                </a>
                <a href="https://wa.me/5511968208871?text=Olá%20Gilberto" target="_blank" className="text-4xl hover:text-red-500 dark:hover:text-red-400 hover:scale-110 transition-all">
                    <FaWhatsapp/>
                </a>
                <a href="mailto:gilbertojjack@hotmail.com" target="_blank" className="text-4xl hover:text-red-500 dark:hover:text-red-400 hover:scale-110 transition-all">
                    <IoIosMail />
                </a>
            </div>
        </div>
        
        <img 
            className="rounded-full ring-4 ring-red-500 dark:ring-red-400 w-60 "
            src={picture} 
            alt="picture" 
        />
    </div>
  )
}

export default Home