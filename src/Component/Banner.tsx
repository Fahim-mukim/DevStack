import ban_img from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div >
                <div className='mb-5'>
                    <h1 className="text-5xl font-extrabold text-[#0F172A]-500">Build Your Ideal</h1>
                    <h1 className=' text-5xl font-extrabold bg-[linear-gradient(to_right,#FF5722,#D81B7E,#7C3AED)] bg-clip-text text-transparent'>Development Stack</h1>
                </div>
                    <div className='text-[#475569] mb-5'> 
                    <p>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                </div>
                <div className='flex gap-4'>
                    <button className=' font-semibold  bg-[linear-gradient(to_right,#F97316,#EC4899)]  text-white px-4 py-2 rounded-xl'>Explore Technologies</button>
                    <button className=' border border-gray-200 text-[#374151]-500 px-13 py-3 rounded-2xl'>Learn More</button>
                </div>
            </div>
            <div>
                <img src={ban_img} alt="" />
            </div>


        </div>
    );
};

export default Banner;