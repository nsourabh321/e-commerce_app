import React from 'react'

export const Navbar = () => {
  return (
    <div className="hidden lg:block bg-slate-100">
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blakish cursor-pointer'>
                <div className='navbar_link relative'>HOME</div>
                <div className='navbar_link relative'>CATEGORIES</div>
                <div className='navbar_link relative'>{`MEN'S`}</div>
                <div className='navbar_link relative'>{`WOMEN'S`}</div>
                <div className='navbar_link relative'>WATCHES</div>
                <div className='navbar_link relative'>EARBUDS</div>
                <div className='navbar_link relative'>RINGS</div>
                <div className='navbar_link relative'>HOT OFFERS</div>
            </div>
        </div>
    </div>
  )
}
