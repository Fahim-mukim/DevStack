import type IStack from '../../type/stack';

const AvailableStackCard = ({ stack, onAdd, isAdded }: { stack: IStack; onAdd: (stack: IStack) => void; isAdded: boolean }) => {
    return (
        <div
            className="border border-gray-200 rounded-xl p-5 flex flex-col justify-evenly gap-5 "
        >


            <div className="flex justify-between items-center gap-3">
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
            <div className="flex flex-wrap justify-between items-center gap-2 text-xs">

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

            <div>
                <button
                    disabled={isAdded}
                    onClick={() => onAdd(stack)}
                    className="w-full border bg-[#0A0F1D] text-white py-2 rounded-lg hover:bg-[#EC4899] hover:text-white transition disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                >
                    {isAdded ? "Added to Stack" : "Add to Stack"}
                </button>
            </div>

        </div>);
};

export default AvailableStackCard;