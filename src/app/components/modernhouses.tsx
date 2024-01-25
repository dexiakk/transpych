'use client'
import { Link } from 'react-scroll'

export default function ModernHouses() {
    const scrollToServices = () => {
        const servicesElement = document.getElementById('ourDeveloperServices');

        if (servicesElement) {
            window.scrollTo({
                top: servicesElement.offsetWidth,
                behavior: 'smooth',
            });
        }
    }
    return (
        <div className="modernhousesbgimage text-white text-center px-5 pt-16 sm:pt-22 md:pt-28 lg:pt-36 pb-16 sm:pb-22 md:pb-28 lg:pb-36">
            <div className="bg-black bg-opacity-40 max-w-[780px] mx-auto px-7 pt-10 pb-10 rounded-[20px]">
                <div className="max-w-[700px] mx-auto">
                    <h1 className="text-[25px] md:text-[41px] lg:text-[45px] font-semibold">
                        <span className="text-[#ff5900]">
                            NOWOCZESNE&nbsp;
                        </span>
                        OSIEDLA
                    </h1>
                    <hr className="max-w-[300px] border-[#ff5900] border-t-[1px] border-b-[2px] mt-2 mb-7 mx-auto" />
                    <span className="font-medium sm:text-[18px] md:text-[24px] lg:text-[27px]">
                        Idealne rozwiązanie zapewniające własną przestrzeń dla osób
                        przeprowadzających się z miasta oraz dla tych, szukających
                        swojego własnego spokojnego kąta!
                    </span> <br />
                    <Link className='mx-auto flex justify-center' to="ourDeveloperServices" smooth={true} duration={1200}>
                        <button className="mt-10 border-[#ff5900] border-[3px] px-7 pt-2 pb-2 text-[#ff5900] text-[17px] lg:text-[20px] font-semibold hover:bg-white">ZOBACZ WIĘCEJ</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
