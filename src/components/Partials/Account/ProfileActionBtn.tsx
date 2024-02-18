import useAuth from "../../../hooks/Auth/useAuth";
import { UserDetailType } from "../../../hooks/types"

const ProfileActionBtn = ({ profile }: { profile: UserDetailType }) => {

    const { user } = useAuth();

    const isSelf= user?.username === profile.username


    console.log(profile)


  return (
      <div>
          {isSelf ? (
              <button className="dark:bg-gray-900 bg-white text-gray-700 border dark:border-gray-700 border-gray-200 hover:bg-gray-50/40 rounded-md dark:hover:bg-gray-900/70  w-full max-w-52 mx-auto dark:text-white px-4 py-2">
                  Edit profile
              </button>) : (
                  <></>
              )}
      </div>
  );
}

export default ProfileActionBtn
