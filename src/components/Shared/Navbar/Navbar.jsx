import { useState } from "react";

const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-blue-600 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="text-white text-lg font-bold">Logo</div>
                        <div className="hidden md:flex space-x-4">
                            <a href="#" className="text-white">AllBooks</a>
                            <a href="#" className="text-white">Favorites</a>
                            <a href="#" className="text-white">ShareABook</a>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-grow"></div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-4 py-2 rounded-md text-sm focus:outline-none"
                            />
                        </div>

                        <img
                            src="userImage.jpg"
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />

                        <button>Login</button>

                        <div className="md:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-white focus:outline-none"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden">
                        <a href="#" className="block text-white py-2 px-4">AllBooks</a>
                        <a href="#" className="block text-white py-2 px-4">Favorites</a>
                        <a href="#" className="block text-white py-2 px-4">ShareABook</a>
                    </div>
                )}
            </nav>

        </>
    );
};

export default Navbar;