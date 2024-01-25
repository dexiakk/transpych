import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    return (
        <div className='z-20 w-full absolute text-white'>
            <header className='flex w-full justify-center text-[12px] sm:text-[15px] pt-1 pb-1 bg-white bg-opacity-25'>
                <div className='flex mr-3 text-[11px] sm:text-[14px] items-center'>
                    <FontAwesomeIcon className='w-4 text-[#ff5900] mr-2' icon={faPhone} />
                    +48 509-299-220
                </div>
                <div className='flex mr-3 items-center'>
                    <FontAwesomeIcon className='w-5 text-[#ff5900] mr-2' icon={faEnvelope} />
                    transpych@wp.pl
                </div>
                <div className='flex mr-3 items-center'>
                    <FontAwesomeIcon className='w-4 text-[#ff5900] mr-2' icon={faLocationDot} />
                    Goszcza
                </div>
            </header>
            <div className='bg-white bg-opacity-10 pt-5 pb-5'>
                <img className='max-w-[300px] md:max-w-[500px] mx-auto' src='/img/Transpych-logo.png' alt='logo' />
            </div>
        </div>
    )
}