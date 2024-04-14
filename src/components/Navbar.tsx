

const Navbar = () => {
  return (
    <div className='navbar h-[50px] flex bg-[#003580] justify-center'>
        <div className="nav-container w-full max-w-[1024px] text-white flex justify-between items-center">
            <span className='logo font-[500]'>IamBooking</span>
            <div className="navItems">

                <button className='navButton ml-[20px] my-[10px] mx-[5px] border-none p-[5px] cursor-pointer font-bold bg-white text-[#003580] rounded-sm'>Login </button>
                </div>
        </div>
    </div>
  )
}

export default Navbar
