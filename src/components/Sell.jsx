// import {AiFillPlayCircle} from 'react-icons/ai';
// import { SiEthereum} from 'react-icons/si';
// import {BsInfoCircle} from 'react-icons/bs';
import ref from '../../client/images/ref.png'
import {Loader} from './';

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome =() => {
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='rounded-md border-t-2 border-b-2 border-sky-500 flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <h1 className='text-3x1 sm:text-5xl text-white text-gradient py-1'>
                        Sell a Product <br/> across the world
                    </h1>
                    <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
                        Share your work. <br/>Someone out there needs it.
                    </p>
                    <button
                        type="button"
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <p className='text-white font-semibold'>Start Selling</p>
                    </button>
                </div>

                <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
                    <img src={ref} alt="digiproduct" className='h-80 w-22 cursor-pointer' />
                    
                </div>

            </div>

        </div>
    );
}

export default Welcome;