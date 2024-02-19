import useModal from "../../hooks/useModal";
import { MdClose } from "react-icons/md";

interface Props {
    children: React.ReactNode;
    title: string;
}

const Modal = ({ children, title }: Props) => {
    const { isOpen, toggleModal } = useModal();

    return (
        <>
            <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                onClick={toggleModal}
                className={`${
                    isOpen ? "flex" : "hidden"
                } overflow-y-auto  overflow-x-hidden flex-col fixed top-0 right-0 left-0 z-50 dark:bg-gray-700/50 bg-gray-200/50 justify-center items-center w-full md:inset-0  min-h-screen`}
            >
                <div onClick={(e) => e.stopPropagation()} className="relative p-4 animate-fadeIn w-full max-w-xl h-full max-h-full">
                    <div className="relative bg-white rounded  flex justify-center flex-col shadow dark:bg-gray-900">
                        <div className="flex items-center  justify-between p-6 dark:border-gray-600">
                            <h3 className="text-xl  text-gray-700 dark:text-white">
                                {title}
                            </h3>
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                            >
                                <MdClose className="w-8 h-8" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4">{children}</div>
                    </div><div className="h-4"></div>
                </div>
            </div>
        </>
    );
};

export default Modal;
