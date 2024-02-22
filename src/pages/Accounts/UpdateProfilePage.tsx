import { UserDetailType } from "../../hooks/types";
import useUpdateProfile from "../../hooks/Account/useUpdateProfile";
import Loader from "../../components/common/Loader";
import { useState } from "react";
import UpdateProfileImage from "../../components/Partials/Account/UpdateProfileImage";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";

const UpdateProfilePage = ({ profile }: { profile: UserDetailType }) => {

  const { updateInfo, isPending } = useUpdateProfile(profile.username)

  const [info, setInfo] = useState({
    name: profile.name,
    bio: profile.bio,
    location: profile.location,
    gender: profile.gender||"",
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
    const gender = formData.get("gender") as string;
    const data = {
      name,
      bio,
      location,
      gender
    }

    updateInfo(data)

  }


    return (
        <section className="h-full overflow-y-auto">
        <div>
          <UpdateProfileImage profile={profile}/>
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
            <Select defaultValue={info.gender} disabled={isPending} label="Gender" name="gender" required={false} options={[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}]}/>
                </div>
                <div>
                    <button
                        disabled={isPending}
                        className="bg-white hover:bg-gray-50 border border-gray-100 text-gray-700 py-2 px-8 rounded-full"
                    >
                        {isPending ? <Loader /> : "Save"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UpdateProfilePage;
