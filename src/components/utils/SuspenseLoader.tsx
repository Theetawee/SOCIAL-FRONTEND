import { ReactNode, Suspense } from "react";
import { LuLoader2 } from "react-icons/lu";

const SuspenseLoader = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Suspense
                fallback={
                    <>
                        <div className="flex items-center py-6 justify-center">
                            <span>
                                <LuLoader2 className="animate-spin w-6 h-6 text-primary-600" />
                            </span>
                        </div>
                    </>
                }
            >
                {children}
            </Suspense>
        </>
    );
};

export default SuspenseLoader;
