import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import swal from "sweetalert";
import "./navbar.css"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                swal("Warning!", "User has signed out!", "info");
            })
    }

    return (
        <>
            <nav className="bg-black p-4">
                <div className="container mx-auto flex  items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="text-[#edf1f5] me-5">
                            <Link to={"/"}>
                                <p className="tracking-tighter text-2xl font-semibold">Book Swap</p>
                            </Link>

                        </div>
                        <div className="hidden md:flex space-x-4">
                            <div className="text-white">
                                <NavLink to={"/allBooks"}>
                                    AllBooks
                                </NavLink>
                            </div>
                            <div className="text-white">
                                <NavLink to={"/favorites"}>
                                    Favorites
                                </NavLink>

                            </div>
                            <div className="text-white">
                                <NavLink to={"sharebook"}>
                                    ShareABook
                                </NavLink>

                            </div>
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

                        {
                            user ? <button className="text-white text-xl font-semibold" onClick={handleLogOut}>LogOut</button> :

                                <Link to={"/login"}>
                                    <button className="text-white text-xl font-semibold">Login</button>
                                </Link>
                        }

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