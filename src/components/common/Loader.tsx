import { LuLoader2 } from "react-icons/lu";

const Loader = ({ fill = "primary-600" }: { fill?: string }) => {
    return (
        <div className="flex w-full h-full items-center justify-center">
            <LuLoader2 className={`animate-spin w-6 h-6 text-${fill}`} />
        </div>
    );
};

export default Loader;
