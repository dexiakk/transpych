'use client'
import { Link } from 'react-scroll'

export default function Experience() {
    
    const scrollToServices = () => {
        const servicesElement = document.getElementById('services');

        if (servicesElement) {
            window.scrollTo({
                top: servicesElement.offsetWidth,
                behavior: 'smooth',
            });
        }
    }
    return (
        <div className="experiencebgimage mt-24 flex items-center">
            <div className="bg-black bg-opacity-20 h-[80%] sm:h-[70%] max-w-[1000px] flex justify-between mx-auto px-4 sm:px-10 items-center rounded-[20px]">
                <div className="mr-4 sm:mr-10 font-Rubik">
                    <span className="text-[24px] sm:text-[30px] md:text-[34px] font-semibold text-white">
                        PONAD
                        <span className="text-[#ff5900]"> 30 LAT </span>
                        DOŚWIADCZENIA!
                    </span> <br />
                    <span className="text-[14px] sm:text-[18px] md:text-[20px] text-white">
                        30 lat obecności na rynku sprawia, że jesteśmy jedną z niewielu
                        firm w Małopolsce mogących podjąć się tak obszerniej liście zadań
                        oraz skrupulatnie dopasować się pod potrzeby Klienta!
                    </span> <br />
                    <Link to="services" smooth={true} duration={1200}>
                        <button className="bg-[#ff5900] text-white text-[13px] sm:text-[20px] font-medium mx-auto mt-6 px-6 sm:px-10 pt-2 pb-2 rounded-[20px] buttonshadow hover:opacity-75">
                            OFERTA
                        </button>
                    </Link>
                </div>
                <div className="onPhoneScreenHidden flex justify-end h-full items-center">
                    <div className="mr-[3px] sm:mr-[6px]">
                        <img className="object-cover min-w-[100px] md:max-w-[170px] lg:max-w-[200px] h-[150px] sm:h-[200px] md:h-[300px]" src="/img/firstphoto.jpg" alt="firstphoto" />
                    </div>
                    <div>
                        <img className="object-cover min-w-[100px] md:max-w-[170px] lg:max-w-[200px] h-[73px] sm:h-[98px] md:h-[147px]" src="/img/secondphoto.jpg" alt="secondphoto" />
                        <img className="object-cover min-w-[100px] md:max-w-[170px] lg:max-w-[200px] h-[73px] sm:h-[98px] md:h-[147px] mt-[3px] sm:mt-[6px]" src="/img/thirdphoto.jpg" alt="thirdphoto" />
                    </div>
                </div>
            </div>
        </div>
    )
}
