import { MdSignalWifiConnectedNoInternet4 } from "react-icons/md";
const OfflineAlert = () => {
    return (
        <div
            className="flex fixed bottom-0 left-1/2 z-[1000] rounded-lg transform -translate-x-1/2 w-[95%] sm:w-[70%] lg:w-[33%]  text-center items-center justify-center  p-4 mb-4   text-gray-300  bg-gray-900 dark:bg-gray-800 "
            role="alert"
        >
            <MdSignalWifiConnectedNoInternet4 className="w-6 h-6" />
            <span className="sr-only">Info</span>
            <div className="text-center">
                <span className="font-medium ml-3">
                    You're currently offline!
                </span>
            </div>
        </div>
    );
};

export default OfflineAlert;
