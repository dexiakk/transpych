export default function OurClients() {
    return (
        <div className="flex flex-wrap sm:flex-nowrap text-center sm:text-start items-center max-w-[1100px] mx-auto mt-8 sm:mb-12">
            <div className="mx-auto sm:mx-0 sm:ml-4 sm:mr-2">
                <h2 className="text-[#ff5900] text-[32px] sm:text-[25px] font-semibold mb-2">
                    Nasi Klienci
                </h2>
                <span className="text-[#727982]">
                    Trzy największe podmioty z którymi współpracowaliśmy
                </span>
            </div>
            <div className="mx-auto sm:mx-0 mt-7 sm:mt-3 pr-2 w-[350px] sm:w-[430px] md:w-[510px] h-[150px] sm:h-[60px] md:h-[83px]">
                <img src="/img/gmina-michal.png" alt="gmina michalowice" />
            </div>
            <div className="mx-auto sm:mx-0 pr-2 w-[350px] sm:w-[430px] md:w-[510px] h-[150px] sm:h-[60px] md:h-[83px]">
                <img src="/img/gmina-kocm.png" alt="gmina kocmyrzów-luborzyca" />
            </div>
            <div className="mx-auto sm:mx-0 w-[350px] sm:w-[430px] md:w-[510px] h-[150px] sm:h-[60px] md:h-[83px]">
                <img src="/img/liceum-pijar.png" alt="liceum pijarów" />
            </div>
        </div>
    )
}