import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b border-[#E2E8F0] sticky top-0 bg-white z-50">
            <div className="max-w-6xl mx-auto p-4">
                <div className="flex justify-between items-center">

                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex gap-4 items-center text-[#475569]">
                            <li className="text-pink-500 font-bold">Home</li>
                            <li>Technology</li>
                            <li>Project</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="hidden md:flex gap-4 items-center">
                        <h3 className="text-[#475569]">Sign In</h3>

                        <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-4xl">
                            Sign Up
                        </button>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>

                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 border-t border-gray-200 pt-4">

                        <ul className="flex flex-col gap-4 text-[#475569]">
                            <li className="text-pink-500 font-bold">Home</li>
                            <li>Technology</li>
                            <li>Project</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>

                        <div className="flex gap-4 items-center mt-5">
                            <h3 className="text-[#475569]">Sign In</h3>

                            <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-4xl">
                                Sign Up
                            </button>
                        </div>

                    </div>
                )}

            </div>
        </nav>
    );
};

export default Nav;