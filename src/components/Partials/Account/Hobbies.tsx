import { useEffect, useState } from "react";
import { HobbyType } from "../../../hooks/types";
import Loader from "../../common/Loader";
import HobbyChecked from "./HobbyChecked";
import { GiGingerbreadMan } from "react-icons/gi";

interface Props {
    hobbies: HobbyType[] | undefined;
    isHobbiesLoading: boolean;
    isHobbiesError: boolean;
    profile_hobbies: HobbyType[];
    update_hobbies: (hobbies: number[]) => void;
    isUpdatingHobbies: boolean;
    isSuccess: boolean;
}

const Hobbies = ({
    hobbies,
    isHobbiesLoading,
    isHobbiesError,
    profile_hobbies,
    update_hobbies,
    isUpdatingHobbies,
    isSuccess
}: Props) => {

    const [changed, setChanged] = useState(false);

    useEffect(() => {
        if(isSuccess) {
            setChanged(false);
        }

    },[isSuccess])

    useEffect(() => {
        const hobbies_ids = profile_hobbies?.map((hobby) => hobby.id);
        localStorage.setItem("hobbies", JSON.stringify(hobbies_ids));
        const handleStorageChange = () => {
            setChanged(true);

        }
        window.addEventListener("changed", handleStorageChange);

        return () => {
            window.removeEventListener("changed", handleStorageChange);
            localStorage.removeItem("hobbies");
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleClick = async () => {
        const new_hobbies = JSON.parse(localStorage.getItem("hobbies") || "[]");
        update_hobbies(new_hobbies);

    }



    return (
        <div className="min-h-[30vh]">
            <div className="flex mb-6 items-center justify-between">
                <div className="flex mb-2 items-center">
                    <GiGingerbreadMan className="w-6 h-6 text-primary-500" />
                    <p className="ml-2 text-lg font-medium">Hobbies</p>
                </div>
                {changed && (
                    <div className="text-right">
                        <button
                            onClick={handleClick}
                            disabled={isUpdatingHobbies}
                            className="bg-white hover:bg-gray-50 text-gray-700 py-1.5 px-5 rounded-full"
                        >
                            {isUpdatingHobbies ? <Loader /> : "Save"}
                        </button>
                    </div>
                )}
            </div>

            {isHobbiesLoading ? (
                <Loader />
            ) : isHobbiesError ? (
                <p>Unable to fetch data!</p>
            ) : (
                <div className="">
                    <ul className="flex flex-wrap gap-3">
                        {hobbies?.map((hobby) => {
                            // Check if the current hobby is in the profile's hobbies
                            const isInProfileHobbies = profile_hobbies.some(
                                (profileHobby) => profileHobby.id === hobby.id
                            );

                            // Render the hobby only if it's in the profile's hobbies
                            if (isInProfileHobbies) {
                                return (
                                    <HobbyChecked
                                        checked={true}
                                        key={hobby.id}
                                        hobby={hobby}
                                    />
                                );
                            }

                            // Return null if the hobby is not in the profile's hobbies
                            return (
                                <HobbyChecked
                                    checked={false}
                                    key={hobby.id}
                                    hobby={hobby}
                                />
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Hobbies;
