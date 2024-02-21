/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    id: string;
    name: string;
    disabled: boolean;
    required?: boolean;
    setValue?: boolean;
    minLength?: number;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    type: string;
    inref?: any;
    auto_on?: boolean;
    className?: string;
}
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Input = ({
    id,
    name,
    disabled,
    required = true,
    setValue = false,
    minLength = 0,
    value = "",
    onChange = () => {},
    label,
    type,
    inref,
    auto_on = true,
    className = "bg-white dark:bg-gray-900",
}: Props) => {
    const [passwordType, setPasswordType] = useState("password");

    const textClass =
        "block px-2 pb-2  pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-1 focus:border-primary-600 peer";

    return (
        <>
            <div>
                <div className="relative">
                    {setValue ? (
                        <input
                            type={type === "password" ? passwordType : type}
                            ref={inref}
                            name={name}
                            id={id}
                            disabled={disabled}
                            required={required}
                            className={textClass}
                            placeholder=" "
                            autoCapitalize="off"
                            autoComplete="off"
                            minLength={minLength}
                            value={value}
                            onChange={onChange}
                            aria-label={label}
                            autoFocus={auto_on}
                        />
                    ) : (
                        <input
                            type={type === "password" ? passwordType : type}
                            name={name}
                            ref={inref}
                            id={id}
                            disabled={disabled}
                            required={required}
                            className={textClass}
                            placeholder=" "
                            autoCapitalize="off"
                            autoComplete="off"
                            minLength={minLength}
                            aria-label={label}
                            autoFocus={auto_on}
                        />
                    )}
                    {type === "password" && (
                        <div className="absolute  top-[15px] right-4">
                            {passwordType === "text" ? (
                                <span
                                    onClick={() => setPasswordType("password")}
                                    className="cursor-pointer"
                                >
                                    <FaEyeSlash className="w-4 text-gray-600 h-4" />
                                </span>
                            ) : (
                                <span
                                    onClick={() => setPasswordType("text")}
                                    className="cursor-pointer"
                                >
                                    <FaEye className="w-4 h-4 text-gray-600" />
                                </span>
                            )}
                        </div>
                    )}

                    <label
                        htmlFor={id}
                        className={`absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4   scale-75 top-3 z-10 origin-[0]  ${className} px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                    >
                        {label}
                    </label>
                </div>
            </div>
        </>
    );
};

export default Input;
