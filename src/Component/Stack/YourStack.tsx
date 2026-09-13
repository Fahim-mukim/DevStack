
import type IStack from '../../type/stack';
import SelectedStackCard from './SelectedStackCard';

const YourStack = ({
    stacks, onRemove, onRemoveAll }: { stacks: IStack[]; onRemove: (id: number) => void; onRemoveAll: () => void; }) => {
    return (
        <div className="col-span-3">
            <div className="border border-gray-200 rounded-xl p-4">


                <div>
                    <h2 className="text-xl font-bold">
                        Your Stack
                    </h2>

                    <p className="text-gray-500">
                        {stacks.length === 0
                            ? "No technologies selected yet ."
                            : `${stacks.length} Technolog${stacks.length > 1 ? "ies" : "y"} Selected`
                        }
                    </p>
                </div>

                <div >

                    {stacks.length === 0 ? (
                        <div className="min-h-52 flex justify-center items-center text-gray-500">
                            <p>
                                Your stack is empty.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            {stacks.map((stack) => (
                                <div className=" border  border-gray-300 rounded-lg    " key={stack.id} >
                                    <SelectedStackCard
                                        stack={stack} onRemove={onRemove}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {stacks.length > 0 && (
                        <button
                            onClick={onRemoveAll}
                            className="mt-4 w-full border border-red-200 text-red-500 py-2 rounded-lg hover:bg-red-50 transition"
                        >
                            Remove All
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default YourStack;