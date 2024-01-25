import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className='footerbgimage flex justify-center'>
            <div className='max-w-[1100px] flex justify-between text-white px-2 pt-6 pb-4'>
                <div className='text-center text-[11px] sm:text-[13px] m:text-[14px]'>
                    <span className='text-[#ff5900] text-[12px] sm:text-[14px] md:text-[16px] font-semibold'>
                        PRZEDSIĘBIORSTWO <br />
                        BUDOWLANE I DROGOWE <br />
                        <span className='font-bold'>TRANSPYCH</span><br />
                        HENRYK DUTKIEWICZ
                    </span> <br />
                    <div className='pt-2'>
                        NIP: 6780035861
                    </div>
                    <span>
                        REG: 350012791
                    </span>
                </div>
                <div className='w-[50%] px-4 ml-7 mt-auto mb-auto pb-3'>
                    <img className='object-cover' src='/img/Transpych-logo.png' />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-9 pr-12 sm:pr-7 pl-9 sm:pl-5 sm:items-center'>
                    <div><FontAwesomeIcon className='text-[23px] md:text-[25px] lg:text-[32px] text-[#ff5900] hover:bg-white hover:p-1 hover:rounded-[50%]' icon={faPhone} /></div>
                    <div><FontAwesomeIcon className='text-[23px] md:text-[25px] lg:text-[32px] text-[#ff5900] hover:bg-white hover:p-1 hover:rounded-[50%]' icon={faEnvelope} /></div>
                    <div><FontAwesomeIcon className='text-[23px] md:text-[25px] lg:text-[32px] text-[#ff5900] hover:bg-white hover:p-1 hover:rounded-[50%]' icon={faLocationDot} /></div>
                </div>
            </div>
        </footer>
    )
}
