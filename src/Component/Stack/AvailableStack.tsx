import { useState } from "react";
import type IStack from "../../type/stack";
import AvailableStackCard from "./AvailableStackCard";
import YourStack from "./YourStack";

const AvailableStack = ({ stacks }: { stacks: IStack[] }) => {
    const [yourStack, setYourStack] = useState<IStack[]>([]);

    const addToStack = (stack: IStack) => {
        const alreadyAdded = yourStack.some(
            (item) => item.id === stack.id
        );

        if (alreadyAdded) {
            alert("This technology is already in your stack!");
            return;
        }

        setYourStack([...yourStack, stack]);
    }
    const removeFromStack = (id: number) => {
        setYourStack(yourStack.filter((item) => item.id !== id));
    };
    const removeAll = () => {
        setYourStack([]);
    };
    return (
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {stacks.map((stack: IStack) => (
                        <AvailableStackCard
                            key={stack.id}
                            stack={stack}
                            onAdd={addToStack}
                            isAdded={yourStack.some((item) => item.id === stack.id)}
                        />
                    ))}

                </div>
            </div>
            <div className="lg:col-span-3">
                <YourStack stacks={yourStack} onRemove={removeFromStack} onRemoveAll={removeAll} />
            </div>



        </div>
    );
};

export default AvailableStack;