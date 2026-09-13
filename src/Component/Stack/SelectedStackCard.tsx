import type IStack from "../../type/stack";

const SelectedStackCard = ({ stack , onRemove}: { stack: IStack ; onRemove:(id:number) => void;}) => {
    return (
        <div className="  p-1.5  flex items-center gap-3">
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
    );
};

export default SelectedStackCard;