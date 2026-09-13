import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="border-b border-[#E2E8F0]">
            <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div >
                    <ul className="flex gap-4 justify-between items-center text-[#475569]">
                        <li className="text-pink-500 font-bold">Home</li>
                        <li>Technology</li>
                        <li>Project</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex gap-4 justify-between items-center">
                    <h3 className="text-[#475569]">Sign In</h3>
                    <button className="bg-[#D91B7E] text-white px-4 py-2 rounded-4xl ">Sign Up</button>
                </div>
            </div>

        </nav>

    );
};

export default Nav;