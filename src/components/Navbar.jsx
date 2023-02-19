import {useState} from 'react';
// import { HiMenuAlt4 } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../client/images/logo.png'

const NavbarItem = ( {title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar =() => {

    const connectWallet = async() => {
        
    }

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className='md:flex-[0.5] flex-initial justify-center items-center'> 
                <img src={logo} alt="logo" className='h-10 w-22 cursor-pointer' />

            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["Bucket", "Sell a product"].map((item, index) => (
                    <NavbarItem key ={item+index} title={item}/>
                ))}
                <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <p className='text-white font-semibold'>Connect Wallet</p>
                    </button>
            </ul>
        </nav>
    );
}

export default Navbar;