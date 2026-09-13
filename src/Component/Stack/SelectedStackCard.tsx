import { CiSquareRemove } from "react-icons/ci";
import type IStack from "../../type/stack";

const SelectedStackCard = ({ stack, onRemove }: { stack: IStack; onRemove: (id: number) => void; }) => {
    return (
        <div className=" flex items-center p-2 justify-between">
            <div className=" min-w-0 p-1.5 flex items-center gap-3">
                <img
                    src={stack.logo}
                    alt={stack.name}
                    className="h-5 w-5 "
                />

                <div>
                    <h3 className="font-medium">
                        {stack.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                        {stack.useFor}
                    </p>
                </div>

            </div>
            <div >

                <CiSquareRemove className="h-5 w-5 shrink-0 cursor-pointer" onClick={() => onRemove(stack.id)} />
            </div>
        </div>

    );
};

export default SelectedStackCard;