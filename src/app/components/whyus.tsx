import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faSnowplow } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

export default function WhyUs() {
    return (
        <div>
            <h2 className='pt-10 pb-10 text-center text-[40px] sm:text-[46px] text-[#ff5900] font-medium'>Dlaczego My?</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 max-w-[1200px] mx-auto text-[#727982] text-[15px] sm:text-[16px]'>
                <div className='flex px-5'>
                    <div><FontAwesomeIcon className='text-[47px] sm:text-[60px] text-[#ff5900] px-7' icon={faClockRotateLeft} /></div>
                    <div>
                        <div className='text-[22px] sm:text-[25px] text-[#ff5900] font-medium'>Doświadczenie</div>
                        <div className='text-[15px] sm:text-[16px] pt-1'>
                            Firma „TRANSPYCH” działa na rynku już od ponad 30 lat! Sprawia to, iż posiadamy
                            ogromne doświadczenie w różnego typu projektach, co stanowi znaczną przewagę nad
                            niedoświadczoną konkurencją! Wybierając Nas masz pewność wykonania prac rzetelnie i profesjonalnie!
                        </div>
                    </div>
                </div>
                <div className='flex px-5 pt-10 sm:pt-0'>
                    <div><FontAwesomeIcon className='text-[45px] sm:text-[60px] text-[#ff5900] px-4' icon={faSnowplow} /></div>
                    <div>
                        <div className='text-[22px] sm:text-[25px] text-[#ff5900] font-medium'>Profesjonalny osprzęt</div>
                        <div className='pt-1'>
                            Technologia z każdym rokiem idzie do przodu, jednak my nie ustępujemy 
                            jej kroku! Nowe rozwiązania są w stanie często nie tylko usprawnić 
                            wykonywanie danych robót, ale także sprawić, by były one wykonane 
                            jeszcze dokładniej. Dlatego właśnie dbamy, aby Nasz osprzęt był 
                            zawsze najnowocześniejszy!
                        </div>
                    </div>
                </div>
                <div className='flex px-5 pt-10'>
                    <div><FontAwesomeIcon className='text-[45px] sm:text-[60px] text-[#ff5900] px-4' icon={faUsers} /></div>
                    <div>
                        <div className='text-[22px] sm:text-[25px] text-[#ff5900] font-medium'>Wykfalifikowana kadra</div>
                        <div className='pt-1'>
                            Jako firma dysponujemy wykwalifikowaną
                            i profesjonalną kadrą robotniczo-zarządzającą, która jest w stanie
                            sprostać nawet najtrudniejszym zadaniom!
                        </div>
                    </div>
                </div>
                <div className='flex px-5 pt-10'>
                    <div><FontAwesomeIcon className='text-[45px] sm:text-[60px] text-[#ff5900] px-4' icon={faInfinity} /></div>
                    <div>
                        <div className='text-[22px] sm:text-[25px] text-[#ff5900] font-medium'>Elastyczność</div>
                        <div className='pt-1'>
                            Dzięki dużemu doświadczeniu mieliśmy możliwość realizowania
                            projektów różnej skali. Dzięki temu jesteśmy w stanie lepiej dostosowywać
                            się do Twoich potrzeb i realizować je w 100%!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
