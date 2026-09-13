import type IStack from "../../type/stack";

const SelectedStackCard = ({ stack }: { stack: IStack }) => {
    return (
        <div className="flex items-center gap-3">
            <img
                src={stack.logo}
                alt={stack.name}
                className="h-8 w-8 object-contain"
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