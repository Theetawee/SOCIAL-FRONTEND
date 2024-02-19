import Image from "../../components/common/Image";
import { UserDetailType } from "../../hooks/types";
import DefaultAvater from "../../assets/default.webp";
import { FaImage } from "react-icons/fa6";import Input from "../../components/common/Input";
import useUpdateProfile from "../../hooks/Account/useUpdateProfile";
import Loader from "../../components/common/Loader";
import { useState } from "react";

const UpdateProfilePage = ({ profile }: { profile: UserDetailType }) => {

  const { updateInfo, isPending } = useUpdateProfile(profile.username)

  const [info, setInfo] = useState({
    name: profile.name,
    bio: profile.bio,
    location: profile.location,
  })


  const handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  const handleUpdateInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;
    const location = formData.get("location") as string;
    const data = {
      name,
      bio,
      location,
    }

    updateInfo(data)

  }


    return (
        <section>
            <div>
                <div className="flex items-center justify-center w-20 h-20">
                    <label
                        htmlFor="fileInput"
                        className="relative cursor-pointer"
                    >
                        <FaImage className="w-6 h-6 absolute z-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-gray-800 dark:text-gray-100" />
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
            <form method="post" onSubmit={handleUpdateInfo}>
                <div className="grid grid-cols-1 max-w-2xl py-8 mx-auto gap-6">
                    <Input
                        id={"name"}
                        name={"name"}
                        className="dark:bg-gray-900 bg-white"
                        setValue
                        onChange={handleChange}
                        value={info.name}
                        disabled={isPending}
                        label={"Name"}
                        type={"text"}
                    />
                    <Input
                        id={"bio"}
                        name={"bio"}
                        className="dark:bg-gray-900 bg-white"
                        value={info.bio || ""}
                        setValue
                        onChange={handleChange}
                        disabled={isPending}
                        label={"Bio"}
                        type={"text"}
                        required={false}
                    />
                    <Input
                        id="location"
                        setValue
                        onChange={handleChange}
                        className="dark:bg-gray-900 bg-white"
                        name="location"
                        value={info.location || ""}
                        disabled={isPending}
                        label="Location"
                        type="text"
                        required={false}
                    />
                </div>
                <div>
                    <button
                        disabled={isPending}
                        className="bg-white hover:bg-gray-50 border border-gray-100 text-gray-700 py-2 px-8 rounded-full"
                    >
                        {isPending ? <Loader /> : "Update"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UpdateProfilePage;
