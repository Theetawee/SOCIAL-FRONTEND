import { useState, useEffect } from "react";
import { MdRunningWithErrors } from "react-icons/md";

const LoadingState = () => {
    const [showRefreshButton, setShowRefreshButton] = useState(false);
    const [text, setText] = useState("Connecting Waanverse");

    const Loader = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle cx="84" cy="50" r="10" fill="#1a1a1a">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="0.25s"
                    calcMode="spline"
                    keyTimes="0;1"
                    values="10;0"
                    keySplines="0 0.5 0.5 1"
                    begin="0s"
                ></animate>
                <animate
                    attributeName="fill"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="discrete"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="#1a1a1a;#ffffff;#1a1a1a;#0284c7;#ffffff"
                    begin="0s"
                ></animate>
            </circle>
            <circle cx="16" cy="50" r="10" fill="#1a1a1a">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                ></animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                ></animate>
            </circle>
            <circle cx="50" cy="50" r="10" fill="#0284c7">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.25s"
                ></animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.25s"
                ></animate>
            </circle>
            <circle cx="84" cy="50" r="10" fill="#ffffff">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.5s"
                ></animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.5s"
                ></animate>
            </circle>
            <circle cx="16" cy="50" r="10" fill="#1a1a1a">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;10;10;10"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.75s"
                ></animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.75s"
                ></animate>
            </circle>
        </svg>
    );

    const [icon, setIcon] = useState(
        <div className="w-24 overflow-hidden h-24 mx-auto">{Loader}</div>
    );

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowRefreshButton(true);
            setText("Taking longer than expected. Please refresh the page.");
            setIcon(
                <MdRunningWithErrors className=" text-rose-600 mb-20 w-20 h-20" />
            );
        }, 50000);

        return () => clearTimeout(timeout);
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <section className="h-screen py-10 flex-col fixed left-0 bottom-0 z-50 w-full flex items-center bg-white dark:bg-gray-900 justify-center">
            {icon}
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {text}
            </p>
            {showRefreshButton && (
                <button
                    className="mt-4 px-5 py-2 bg-primary-700 text-white rounded-full hover:bg-primary-700/90"
                    onClick={handleRefresh}
                >
                    Refresh
                </button>
            )}
        </section>
    );
};

export default LoadingState;
