export default function Advantages() {
    return (
        <div className="mt-10 pl-4 pr-1 onPhoneScreenPadding lg:pb-20 max-w-[1100px] mx-auto">
            <h2 className="sm:w-[80%] md:w-[80%] lg:w-[70%] text-[22px] sm:text-[32px] text-[#ff5900] font-semibold mb-3">
                Oferujemy najnowocześniejsze rozwiązania w najlepszej cenie!
            </h2>
            <div className="flex pr-1 sm:pr-0">
                <div className="pr-2 sm:pr-8 lg:pt-4">
                    <span className="text-[#727982] lg:text-[18px]">
                        Nasza Firma wyposażona jest w wysokiej klasy najnowocześniejszy sprzęt,
                        dzięki czemu oferowane przez Nas usługi są maksymalnie precyzyjne,
                        profesjonalne oraz dostępne w Najlepszej Cenie na rynku!
                    </span>
                    <div className="flex mt-5 lg:pt-8">
                        <div className="pr-1 sm:pr-0">
                            <span className="text-[24px] lg:text-[28px] text-[#ff5900]">
                                980+
                            </span> <br />
                            <span className="text-[14px] lg:text-[17px] font-medium">
                                Zrealizowanych projektów
                            </span>
                            <hr className="border-[#ff5900] w-10 mt-2 mb-3" />
                            <span className="text-[14px] lg:text-[16px] text-[#727982]">
                                Dzięki długiej obecności na rynku, posiadamy ogromne doświadczenie!
                            </span>
                        </div>
                        <div>
                            <span className="text-[24px] lg:text-[28px] text-[#ff5900]">
                                100%
                            </span> <br />
                            <span className="text-[14px] lg:text-[17px] font-medium">
                                Zrealizowanych projektów
                            </span>
                            <hr className="border-[#ff5900] w-10 mt-2 mb-3" />
                            <span className="text-[14px] lg:text-[16px] text-[#727982]">
                                Nasi Klienci bardzo chwalą i cenią sobie wykonywane przez Nas prace!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="onPhoneScreenHidden min-w-[190px] mt-[100px] sm:mt-[50px] ml-2 md:mt-0 md:mr-8 lg:mr-36">
                    <img className="absolute z-20 object-cover w-[120px] md:w-[150px] lg:w-[260px] h-[160px] md:h-[190px] lg:h-[290px] mt-10" src="/img/fourthphoto.jpg" alt="fourthphoto" />
                    <img className="absolute object-cover w-[120px] md:w-[150px] lg:w-[260px] h-[160px] md:h-[190px] lg:h-[290px] ml-16" src="/img/fithphoto.jpg" alt="fithphoto" />
                </div>
            </div>
        </div>
    )
}