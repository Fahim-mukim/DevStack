import React from 'react';
import type IStack from '../../type/stack';

const YourStack = ({ stacks }: { stacks: IStack[] }) => {
    return (
        <div className="col-span-3">
            <div className="border border-gray-200 rounded-xl p-5">


                <div>
                    <h2 className="text-xl font-bold">
                        Your Stack
                    </h2>

                    <p className="text-gray-500">
                        {stacks.length === 0
                            ? "No technologies selected yet ."
                            : `${stacks.length} Technology${stacks.length > 1 ? "ies" : "y"} Selected`
                        }
                    </p> 
                </div>
                <div className="mt-5 min-h-62.5 border border-dashed border-gray-300 rounded-lg flex justify-center items-center text-gray-500">

                    <p>
                        Your stack is empty.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default YourStack;