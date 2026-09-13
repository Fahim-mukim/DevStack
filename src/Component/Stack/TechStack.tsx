import { use } from 'react';
import type IStack from '../../type/stack';
import AvailableStack from './AvailableStack';

const TechStack = ({ StackPromise }: { StackPromise: Promise<IStack[]> }) => {
    const stacks = use(StackPromise)

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 mt-10">
                <div className="flex flex-col gap-2.5">
                    <h1 className="text-2xl sm:text-3xl font-bold">
                        Explore the{" "}
                        <span className="bg-[linear-gradient(to_right,#FF5722,#D81B7E,#7C3AED)] bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h1>

                    <p className="text-sm sm:text-lg text-gray-600">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>
            </div>

            <div>
                <AvailableStack stacks={stacks} />
            </div>
        </div>
    );
};

export default TechStack;