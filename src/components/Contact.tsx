import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { FaMapLocationDot } from "react-icons/fa6"

function Contact() {
  return (
    <div id="contactcontent" className="flex flex-wrap justify-center w-full px-14 py-7 bg-gray-300 dark:bg-gray-800 sm:rounded-md transition-all">
        <p className="flex justify-center w-full text-2xl text-red-500 dark:text-red-400 font-bold mb-5">
            Contatos
        </p>
        <div className="flex flex-row flex-wrap justify-between">
            <a 
                href="https://web.whatsapp.com/send?phone=5511968208871" 
                className="flex flex-row m-5 text-xl items-center space-x-3 hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all"
                target="_blank"
            >
                <FaWhatsapp className="text-3xl text-red-500 dark:text-red-400"/>
                <p className="font-medium">
                    (11) 96820-8871
                </p>
            </a>
            <a 
                href="mailto:gilbertojjack@hotmail.com" 
                className="flex flex-row m-5 text-xl items-center space-x-3 hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all"
                target="_blank"
            >
                <IoIosMail className="text-3xl text-red-500 dark:text-red-400"/>
                <p className="font-medium">
                    gilbertojjack@hotmail.com
                </p>
            </a>
            <a 
                href="https://www.linkedin.com/in/gilberto-junio-11bb8b15b/" 
                className="flex flex-row m-5 text-xl items-center space-x-3 hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all"
                target="_blank"
            >
                <FaLinkedin className="text-3xl text-red-500 dark:text-red-400"/>
                <p className="font-medium">
                    Gilberto Junio
                </p>
            </a>
            <a 
                href="https://www.google.com.br/maps/place/Vila+Monumento,+S%C3%A3o+Paulo+-+SP/@-23.5759093,-46.6201444,15.5z/data=!4m6!3m5!1s0x94ce5960c43d6c61:0xbd77b409228b9ae3!8m2!3d-23.5745079!4d-46.6141322!16s%2Fg%2F121pkvcm?entry=ttu" 
                className="flex flex-row m-5 text-xl items-center space-x-3 hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all"
                target="_blank"
            >
                <FaMapLocationDot className="text-3xl text-red-500 dark:text-red-400"/>
                <p className="font-medium">
                    Vila Monumento - SP - Brasil
                </p>
            </a>
        </div>
        
    </div>
  )
}

export default Contact