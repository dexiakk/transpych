'use client'
import { Link } from 'react-scroll'

export default function Banner() {

    const scrollToServices = () => {
        const servicesElement = document.getElementById('services');

        if (servicesElement) {
            window.scrollTo({
                top: servicesElement.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="bannerbgimage flex justify-center items-center">
            <div className="max-w-[450px] md:max-w-[600px] md:mt-24 mt-[-10px] flex flex-wrap text-center">
                <span className="text-[17px] md:text-[32px] mx-auto font-Rubik text-[#ff5900] font-semibold pb-10">
                    PROFESJONALIZM I DOŚWIADCZENIE
                </span>
                <span className="text-[37px] md:text-[55px] font-Rubik font-normal text-white mx-auto mb-[-5px]">
                    Zbudujmy Razem
                </span>
                <span className="w-full text-[38px] md:text-[55px] font-Rubik font-normal text-white mx-auto">
                    Twoje Marzenia!
                </span>
                <Link className='mx-auto flex justify-center' to="services" smooth={true} duration={1200}>
                    <button className="bg-[#ff5900] text-white text-[20px] font-medium mt-16 px-10 pt-2 pb-2 rounded-[20px] buttonshadow hover:opacity-75">
                        OFERTA
                    </button>
                </Link>
            </div>
        </div>
    )
}