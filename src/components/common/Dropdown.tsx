import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

interface DropdownProps {
    position: "top" | "bottom";
}

const Dropdown: React.FC<DropdownProps> = ({ position }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const buttonStyle = isOpen ? "border-indigo-500" : "border-gray-300";
    const dropdownStyle = isOpen
        ? `absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
              position === "top" ? "bottom-0 mb-12" : "top-0 mt-12"
          }`
        : "hidden";

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className={`inline-flex justify-center w-full rounded-md border ${buttonStyle} shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                    Dropdown
                    <FaAngleDown />
                </button>
            </div>

            <div
                className={dropdownStyle}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
            >
                <div className="py-1" role="none">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                    >
                        Option 1
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                    >
                        Option 2
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                    >
                        Option 3
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
