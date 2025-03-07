import { IoMdArrowDropright } from "react-icons/io";
import heroImg from '../assets/Screenshot from 2025-03-07 16-07-09.png'
export default function Hero(){
    return <div className='max-w-[80%] mx-auto flex justify-between mt-24'>
        <div className='max-w-[50%] text-white'>
            <div className='text-xl text-white'>AIRBNB FOR YACH</div>
            <div className='text-6xl mr-11 mt-5'>Always By Your Side, Always On Your Side.</div>
            <div className='text-2xl mt-4'>Most residences. Awarded the best agents. Suitable resources.</div>
            <div className='flex mt-10'>
                <div className=' border py-5 px-8 text-lg bg-transparent'>Read More</div>
                <div className='bg-white'>
                <IoMdArrowDropright className='text-black text-2xl mt-6 mx-3'/>
                </div>

            </div>
        </div>
        <div>
            <img src={heroImg}/>
        </div>
    </div>
}