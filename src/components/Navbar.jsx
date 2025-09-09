import React from 'react'
import pixabay from '../assets/Pixabay-logo.svg'
import {Link} from 'react-router-dom'
const Navbar = () => {


  
  return (
    <div className='h-1/12  flex items-center justify-between p-2 fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10'>
        <Link to="/"><img src={pixabay} alt="" className='hover:cursor-pointer w-52 text-white hover:text-cyan-400 transition filter drop-shadow-[0_0_12px_rgba(0,255,255,0.8)] hover:drop-shadow-[0_0_20px_rgba(0,255,255,1)]" ' /></Link>
        <form action="" className='flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-md'>
            <input type="text"  className='bg-transparent outline-none text-white placeholder-gray-400 w-80'/>
        </form>
        <ul className='flex gap-4'>
            <li className='hover:cursor-pointer hover:text-rose-400'><Link to="/nature">Nature</Link></li>
            <li className='hover:cursor-pointer hover:text-rose-400'><Link to="/science">Science</Link></li>
            <li className='hover:cursor-pointer hover:text-rose-400'><Link to="/computer">Computer</Link></li>
            <li className='hover:cursor-pointer hover:text-rose-400'><Link to="/sports">Sports</Link></li>
            <li className='hover:cursor-pointer hover:text-rose-400'><Link to="/food">Food</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
