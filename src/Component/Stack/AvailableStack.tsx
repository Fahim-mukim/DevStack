import type IStack from "../../type/stack";
import YourStack from "./YourStack";

const AvailableStack = ({ stacks }: { stacks: IStack[] }) => {
    return (
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-9">
                <div className="grid grid-cols-3 gap-6">

                    {stacks.map((stack: IStack) => (
                        <div
                            key={stack.id}
                            className="border border-gray-200 rounded-xl p-5 flex flex-col justify-evenly gap-5 "
                        >


                            <div className="flex justify-between items-center">
                                <img
                                    className="h-8 w-8 object-contain" src={stack.logo} />

                                <button style={{ color: stack.textColor, }} className="text-xs bg-gray-50 px-3 py-1  font-medium ">
                                    {stack.keyFeature}
                                </button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">
                                    {stack.name}
                                </h2>

                                <p className="text-sm text-gray-600 leading-6">
                                    {stack.description}
                                </p>
                            </div>
                            <div className="flex justify-between items-center text-xs">

                                <button className="bg-[#e7e9ec] text-black px-2.5 py-1 rounded-xl">
                                    {stack.useFor}
                                </button>

                                <button className="bg-gray-100 px-2.5 py-1 rounded-xl">
                                    {stack.difficulty}
                                </button>

                                <div className="flex items-center gap-1">
                                    <span className="text-xs">⭐</span>
                                    <h3 className="text-sm font-medium">{stack.rating}</h3>
                                </div>

                            </div>


                        </div>
                    ))}


                </div>
            </div>



            <div className="col-span-3">
                <div className="border border-gray-200 rounded-xl p-5">


                    <div>
                        <h2 className="text-xl font-bold">
                            Your Stack
                        </h2>

                        <p className="text-gray-500">
                            No technologies selected yet.
                        </p>
                    </div>
                    <div className="mt-5 min-h-62.5 border border-dashed border-gray-300 rounded-lg flex justify-center items-center text-gray-500">

                        <p>
                            Your stack is empty.
                        </p>

                    </div>

                </div>
            </div>
            <YourStack />
            
        </div>
    );
};

export default AvailableStack;