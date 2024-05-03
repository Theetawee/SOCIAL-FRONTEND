import { FaPrint } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className="bg-white rounded-t-2xl dark:bg-gray-950">
            <div className="px-6 max-w-screen-xl mx-auto py-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-5xl  mb-4">
                            Waanverse Privacy Notice
                        </h1>
                        <p className="text-xl mb-4">
                            Last updated: February 06, 2024
                        </p>
                    </div>
                    <div>
                        <button onClick={() => print()}>
                            <p>
                                <FaPrint className="w-5 h-5" /> Print
                            </p>
                        </button>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default Banner;
