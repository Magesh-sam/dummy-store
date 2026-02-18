import { Link } from 'react-router-dom';
import type { NavbarProps } from '../lib/types';
import OpenCart from './icons/OpenCart';

function Navbar({ value, toggleMenu, handleChange, handleKeyDown }: NavbarProps) {
    return (
        <header className="bg-blue-300 sticky top-0 z-20">
            <nav className="p-5 flex items-center justify-between ">
                <button
                    onClick={toggleMenu}
                    className="p-2 hover:cursor-e-resize rounded transition-colors"

                    aria-label="Toggle sidebar"
                >
                    ☰
                </button>

                <div className='  '>
                    <label htmlFor="searchproducts" className="sr-only">Search Products</label>
                    <input type="search" name="searchproducts" id="searchproducts" placeholder="search products..." className="px-3 py-2  bg-white rounded-sm" value={value} onChange={handleChange} onKeyDown={handleKeyDown} />
                </div>
                <Link to="/your-cart" aria-label='view cart'  >
                    <OpenCart />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar