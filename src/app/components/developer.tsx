'use client'
import { Link } from 'react-scroll'

export default function Developer() {

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
        <div className="w-full flex flex-wrap justify-center mt-10 pb-10 sm:pt-5 lg:pt-12 lg:pb-16 developerbgimage text-white">
            <div className="sm:hidden text-center pt-6">
                <span className="text-[18px]">
                    <span className="text-[#ff5900]">
                        [&nbsp;
                    </span>
                    NIERUCHOMOŚCI
                    <span className="text-[#ff5900]">
                        &nbsp;]
                    </span>
                </span>
                <hr className="w-[350px] mx-auto mt-2 border-[#ff5900] border-t-[1px] border-b-[1px]" />
                <div className="px-10 pt-4">
                    <img className="w-[80%] sm:min-w-[200px] mx-auto" src="./img/housephoto.jpg" alt="housephoto" />
                </div>
                <h2 className="mt-3 mb-2 text-[25px] onPhoneScreenTittleSize font-semibold">
                    Wchodzimy na rynek
                    <br />
                    <span className="text-[#ff5900]">
                        Deweloperski!
                    </span>
                </h2>
                <div className="px-10 text-[14px] onPhoneScreenTextSize">
                    <span>
                        Branża deweloperska w Polsce ciągle jest w stanie rozwoju.
                        Na rynku dalej brakuje firm z tak innowacyjnym i rzetelnym
                        podejściem jak My, dlatego postaramy się zapełnić tą lukę!
                    </span> <br /> <br />
                    <span>
                        Wybierając Nasze Usługi Deweloperskie będziecie mieli Państwo
                        pewność otrzymania produktu najwyższej klasy, wykonanego
                        nowoczesnymi technologiami zgodnie z prawem budowlanym!
                    </span> <br />
                    <Link className='mx-auto flex justify-center' to="ourDeveloperServices" smooth={true} duration={1200}>
                        <button className="mt-6 border-[#ff5900] border-2 px-7 pt-2 pb-2 text-[#ff5900] font-semibold hover:bg-white">OFERTA</button>
                    </Link>
                </div>
            </div>
            <div className="hidden sm:flex max-w-[1100px] mx-auto items-center">
                <img className="pt-4 pl-6 w-[300px] md:w-[400px] lg:w-[500px] h-[231px] md:h-[308px] lg:h-[386px]" src="./img/housephoto-big.png" alt="housephoto" />
                <div className="pt-4 pl-4 pr-2">
                    <div className="hidden text-start sm:block min-w-[50%]">
                        <div className="flex items-center">
                            <hr className="w-[20px] mr-3 border-[#ff5900] border-t-[1px] border-b-[1px]" />
                            <span className="hidden sm:block text-[12px]">
                                <span className="text-[#ff5900]">
                                    [&nbsp;
                                </span>
                                NIERUCHOMOŚCI
                                <span className="text-[#ff5900]">
                                    &nbsp;]
                                </span>
                            </span>
                        </div>
                        <h2 className="text-[21px] md:text-[27px] lg:text-[34px] mb-2 lg:mb-4 font-semibold">
                            Wchodzimy na rynek <br />
                            Deweloperski!
                        </h2>
                        <div>
                            <span>
                                Branża deweloperska w Polsce ciągle jest w stanie rozwoju.
                                Na rynku dalej brakuje firm z tak innowacyjnym i rzetelnym
                                podejściem jak My, dlatego postaramy się zapełnić tą lukę!
                            </span> <br /> <br />
                            <span>
                                Wybierając Nasze Usługi Deweloperskie będziecie mieli Państwo
                                pewność otrzymania produktu najwyższej klasy, wykonanego
                                nowoczesnymi technologiami zgodnie z prawem budowlanym!
                            </span> <br />
                            <Link className='mx-auto flex justify-center' to="ourDeveloperServices" smooth={true} duration={1200}>
                                <button className="mt-6 border-[#ff5900] border-2 px-7 pt-2 pb-2 text-[#ff5900] font-semibold hover:bg-white">OFERTA</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


