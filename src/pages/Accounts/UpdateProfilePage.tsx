import Image from "../../components/common/Image";
import { UserDetailType } from "../../hooks/types";
import DefaultAvater from "../../assets/default.webp";
import { TiImage } from "react-icons/ti";
import Input from "../../components/common/Input";

const UpdateProfilePage = ({ profile }: { profile: UserDetailType }) => {
    return (
        <section>
            <form method="post">
                <div>
                    <div className="flex items-center justify-center w-20 h-20">
                        <label
                            htmlFor="fileInput"
                            className="relative cursor-pointer"
                        >
                            <TiImage className="w-6 h-6 absolute z-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-gray-600 hover:text-gray-800" />
                            <Image
                                src={profile.image || DefaultAvater}
                                alt="User Profile"
                                className="w-20 h-20 opacity-50 rounded-full"
                            />
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 max-w-2xl py-8 mx-auto gap-6">
                    <Input
                        id={"name"}
                        name={"name"}
                        className="dark:bg-gray-900 bg-white"
                        setValue
                        value={profile.name}
                        disabled={false}
                        label={"Name"}
                        type={"text"}
                    />
                    <Input
                        id={"bio"}
                        name={"bio"}
                        className="dark:bg-gray-900 bg-white"
                        value={profile.bio || ""}
                        setValue
                        disabled={false}
                        label={"Bio"}
                        type={"text"}
                        required={false}
                    />
                    <Input
                        id="location"
                        setValue={true}
                        className="dark:bg-gray-900 bg-white"
                        name="location"
                        value={profile.location || ""}
                        disabled={false}
                        label="Location"
                        type="text"
                        required={false}
                    />
                </div>
                <div>
                    <button className="bg-white hover:bg-gray-50 border border-gray-100 text-gray-700 py-2 px-8 rounded-full">
                        Save
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UpdateProfilePage;
