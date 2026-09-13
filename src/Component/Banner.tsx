import ban_img from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-16 flex flex-col lg:flex-row justify-between items-center gap-10">

            {/* Banner Text */}
            <div className="w-full lg:w-1/2">

                <div className="mb-5">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A]">
                        Build Your Ideal
                    </h1>

                    <h1 className="text-4xl sm:text-5xl font-extrabold bg-[linear-gradient(to_right,#FF5722,#D81B7E,#7C3AED)] bg-clip-text text-transparent">
                        Development Stack
                    </h1>
                </div>

                <div className="text-[#475569] mb-5 max-w-xl">
                    <p>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="font-semibold bg-[linear-gradient(to_right,#F97316,#EC4899)] text-white px-4 py-2 rounded-xl">
                        Explore Technologies
                    </button>

                    <button className="border border-gray-200 text-[#374151] px-6 py-2 rounded-xl">
                        Learn More
                    </button>
                </div>

            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src={ban_img}
                    alt="Development Stack"
                    className="w-full max-w-md lg:max-w-lg"
                />
            </div>

        </div>
    );
};

export default Banner;