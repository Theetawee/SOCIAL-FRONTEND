import { ChangeEvent, useState} from "react";
import { HobbyType } from "../../../hooks/types";

const HobbyChecked = ({
    hobby,
    checked,
    editable=true
}: {
    hobby: HobbyType;
        checked: boolean;
    editable?:boolean
    }) => {

    const [isChecked, setIsChecked] = useState(checked);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const hobbyId = hobby.id;
        const isChecked = e.target.checked;
        setIsChecked(isChecked);
        const hobbies = JSON.parse(localStorage.getItem("hobbies") || "[]");
        if (isChecked) {
            //
            hobbies.push(hobbyId);

        } else {
            //
            const index = hobbies.indexOf(hobbyId);
            if (index > -1) {
                hobbies.splice(index, 1);

            }
        }
        localStorage.setItem("hobbies", JSON.stringify(hobbies));
        window.dispatchEvent(new Event("changed"));
    };

    return (
        <>
            {editable ? (
                <li
                    className={`rounded-full pr-3 ${
                        checked
                            ? "dark:bg-primary-950 text-white bg-primary-400 shadow"
                            : "dark:bg-gray-800 bg-white text-gray-500 dark:text-gray-300"
                    }`}
                >
                    <div className="flex items-center ps-3">
                        <input
                            id={hobby.id.toString()}
                            type="checkbox"
                            onChange={handleChange}
                            checked={isChecked}
                            className={`w-4 h-4 text-primary-600 bg-gray-100 border border-gray-300 rounded dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-0 dark:border-gray-500`}
                        />
                        <label
                            htmlFor={hobby.id.toString()}
                            className="w-full py-3 ms-2 text-sm font-medium"
                        >
                            {hobby.name}
                        </label>
                    </div>
                </li>
            ) : (
                    <li>

                    <div className="flex rounded-full dark:bg-primary-950 text-white bg-primary-400 shadow gap-4 items-center justify-center px-4 py-2 font-medium">
                        {hobby.name}
                    </div>
                </li>
            )}
        </>
    );
};

export default HobbyChecked;
