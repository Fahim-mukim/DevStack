import { useState } from "react";
import type IStack from "../../type/stack";
import AvailableStackCard from "./AvailableStackCard";
import YourStack from "./YourStack";

const AvailableStack = ({ stacks }: { stacks: IStack[] }) => {
    const [yourStack, setYourStack] = useState<IStack[]>([]);

    const addToStack = (stack: IStack) => {
        setYourStack([...yourStack, stack]);
    };
    return (
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-9">
                <div className="grid grid-cols-3 gap-6">

                    {stacks.map((stack: IStack) => (
                        <AvailableStackCard stack={stack} onAdd={addToStack} />
                    ))}

                </div>
            </div>
            <div className="col-span-3">
                <YourStack stacks={yourStack} />
            </div>



        </div>
    );
};

export default AvailableStack;