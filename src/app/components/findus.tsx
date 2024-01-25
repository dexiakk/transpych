import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons'


export default function FindUs() {
    return (
        <div className="max-w-[850px] mx-auto text-center md:px-8 pt-6 pb-12 border-l-[2px] border-r-[2px] border-dashed">
            <span className="text-[36px] sm:text-[42px] md:text-[46px] font-semibold text-[#ff5900]">
                Znajdź Nas!
            </span>
            <div>
                <div className='flex md:hidden justify-center gap-5 sm:gap-14 text-[13px] sm:text-[19px] mt-5'>
                    <div className='text-[#727982]'>
                        <div><FontAwesomeIcon className='text-[70px] sm:text-[85px] text-[#ff5900] mx-auto' icon={faSquarePhone} /></div>
                        <span className='text-black font-semibold'>Telefon:</span> <br />
                        <span>+48 509 299 220</span>
                    </div>
                    <div className='text-[#727982]'>
                        <div><FontAwesomeIcon className='text-[70px] sm:text-[85px] text-[#ff5900] mx-auto' icon={faSquareEnvelope} /></div>
                        <span className='text-black font-semibold'>Email:</span> <br />
                        <span>transpych@wp.pl</span>
                    </div>
                    <div className='text-[#727982]'>
                        <div><FontAwesomeIcon className='text-[70px] sm:text-[85px] text-[#ff5900] mx-auto' icon={faSquareUpRight} /></div>
                        <span className='text-black font-semibold'>Adres:</span> <br />
                        <span>
                            Goszcza 32-010 <br />
                            ul Sportowa 8
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-5">
                <div className='hidden md:block pl-3 pr-3 text-[19px] '>
                    <div className='text-[#727982]'>
                        <div><FontAwesomeIcon className='text-[85px] text-[#ff5900] mx-auto' icon={faSquarePhone} /></div>
                        <span className='text-black font-semibold'>Telefon:</span> <br />
                        <span>+48 509 299 220</span>
                    </div>
                    <div className='text-[#727982] pt-4'>
                        <div><FontAwesomeIcon className='text-[85px] text-[#ff5900] mx-auto' icon={faSquareEnvelope} /></div>
                        <span className='text-black font-semibold'>Email:</span> <br />
                        <span>transpych@wp.pl</span>
                    </div>
                    <div className='text-[#727982] pt-4'>
                        <div><FontAwesomeIcon className='text-[85px] text-[#ff5900] mx-auto' icon={faSquareUpRight} /></div>
                        <span className='text-black font-semibold'>Adres:</span> <br />
                        <span>
                            Goszcza 32-010 <br />
                            ul Sportowa 8
                        </span>
                    </div>
                </div>
                <div className='mx-auto'>
                    <iframe className="onPhoneScreenMap w-[450px] sm:w-[550px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.537739919352!2d20.069521004033568!3d50.18847872819427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471652040f908905%3A0xf63a6f9a0360171d!2sGoszcza%20104%2C%2032-010%20Goszcza!5e0!3m2!1spl!2spl!4v1705966327514!5m2!1spl!2spl" width="600" height="450" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}
