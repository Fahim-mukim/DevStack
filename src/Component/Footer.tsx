import Logo from "../assets/logo-text.png";
const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-4 pl-5 gap-20 max-w-6xl mx-auto mt-20">
                <div className="grid grid-cols-1  gap-4">
                    <img className="h-10px" src={Logo} alt="logo" />
                    <p className="text-gray-600  text-sm">Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className="flex gap-4 items-center">
                        <button>GitHub</button>
                        <button>Twitter</button>
                        <button>LinkedIn</button>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-4" >
                    <h2 className="font-bold ">PRODUCT</h2>
                    <div className="flex flex-col gap-2 text-gray-600  text-sm">
                        <h3>Home</h3>
                        <h3>Technologies</h3>
                        <h3>Projects</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                    <h2 className="font-bold ">COMPANY</h2>
                    <div className="flex flex-col gap-2 text-gray-600  text-sm">
                        <h3>About</h3>
                        <h3>Careers</h3>
                        <h3>Contact</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                    <h2 className="font-bold ">LEGAL</h2>
                    <div className="flex flex-col gap-2 text-gray-600  text-sm">
                        <h3>Privacy Policy</h3>
                        <h3>Terms of Service</h3>
                    </div>
                </div>
            </div>
            <div className=" max-w-6xl mx-auto flex justify-between mt-10  text-gray-600 text-sm">
                <h3>© 2026 Dev Stack. All rights reserved.</h3>
                <div className="flex gap-4">
                    <button>Privacy</button>
                    <button>Terms</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;