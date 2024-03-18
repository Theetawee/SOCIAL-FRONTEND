import Image from "../../components/common/Image";
import { lazy, useState } from "react";
import DefaultAvater from "../../assets/default.webp";
import { useParams } from "react-router-dom";
import useFetchUser from "../../hooks/Account/useFetchUser";
import Loader from "../../components/common/Loader";
import Seo from "../../components/utils/Seo";
const NotFound = lazy(() => import("../../components/common/NotFound"));
const ProfileActionBtn = lazy(
  () => import("../../components/Partials/Account/ProfileActionBtn")
);
const Modal = lazy(() => import("../../components/common/Modal"));
const UpdateProfilePage = lazy(() => import("./UpdateProfilePage"));
const Hobbies = lazy(() => import("../../components/Partials/Account/Hobbies"));
const HobbyChecked = lazy(
  () => import("../../components/Partials/Account/HobbyChecked")
);
import useAuth from "../../hooks/Auth/useAuth";
import { GiGingerbreadMan } from "react-icons/gi";
import useTopbar from "../../hooks/useTopbar";
const FriendsList=lazy(()=>import('../../components/Partials/Account/FriendsList'))
import Posts from "./Posts";
import SuspenseLoader from "../../components/utils/SuspenseLoader";
const VerifiedSvg = lazy(
  () => import("../../components/Partials/Account/VerifiedSvg")
);
const LoginBtn = lazy(() => import("../../components/common/LoginBtn"));
const ProfileInfo = lazy(
  () => import("../../components/Partials/Account/ProfileInfo")
);

const ProfilePage = () => {
  useTopbar("Profile", true);
  const { username } = useParams();
  const { user, isAuthenticated } = useAuth();

  const [view, setView] = useState<"profile" | "friends" | "posts">("profile");

  const setClass = "border-b-2 border-primary-600 py-2";

  const user_name = username || "";

  const {
    profile,
    isLoading,
    isError,
    hobbies,
    isHobbiesError,
    isHobbiesLoading,
    update_hobbies,
    isHobbiesUpdating,
    isSuccess,
  } = useFetchUser(user_name);

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return (
      <Seo title="Error!" description="Profile not Found">
        <NotFound type="profile" />
      </Seo>
    );
  } else if (profile) {
    return (
      <Seo
        title={`${profile.name}(@${profile.username})`}
        description={`Profile Page for @${profile.username}`}>
        <Modal title="Edit Profile">
          <UpdateProfilePage profile={profile} />
        </Modal>

        <section>
          <div className="pt-4 grid bg-white dark:bg-gray-950 grid-cols-1 gap-3">
            <div className="items-center flex-wrap justify-between flex">
              <div className="flex px-4 gap-x-6 flex-wrap justify-center items-center">
                <div>
                  <Image
                    src={profile.image || DefaultAvater}
                    alt="User"
                    hash={profile.profile_image_hash}
                    className="w-32 h-32 rounded"
                  />
                </div>
                <div className="py-4">
                  <div className="flex">
                    <h3
                      className={`text-2xl font-medium mb-1 text-gray-900 dark:text-white`}>
                      {profile.name}
                    </h3>
                  </div>
                  <span className="flex gap-1 items-center">
                    <p className="leading-4 italic">@{profile?.username}</p>
                    {profile.verified && <VerifiedSvg />}
                  </span>
                  <div className="text-center   w-full pt-6 pb-4">
                    <ProfileActionBtn profile={profile} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <button
                  onClick={() => setView("profile")}
                  className={`${view === "profile" ? setClass : ""}`}>
                  Profile
                </button>
                <button
                  onClick={() => setView("friends")}
                  className={`${view === "friends" ? setClass : ""}`}>
                  Friends
                </button>
                <button
                  onClick={() => setView("posts")}
                  className={`${view === "posts" ? setClass : ""}`}>
                  Posts
                </button>
              </div>
            </div>
          </div>
          {user && isAuthenticated ? (
            <div className="py-8 dark:bg-gray-800/70 px-4 bg-gray-100 h-full">
              {view === "profile" ? (
                <>
                  <div className="grid grid-cols-1 gap-5 ">
                    <div>
                      <ProfileInfo profile={profile} />
                    </div>

                    {profile.username === user?.username ? (
                      <div>
                        <Hobbies
                          isSuccess={isSuccess}
                          isUpdatingHobbies={isHobbiesUpdating}
                          update_hobbies={update_hobbies}
                          profile_hobbies={profile.hobbies}
                          hobbies={hobbies}
                          isHobbiesLoading={isHobbiesLoading}
                          isHobbiesError={isHobbiesError}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="flex mb-2 items-center">
                          <GiGingerbreadMan className="w-6 h-6 text-primary-500" />
                          <p className="ml-2 text-lg font-medium">Hobbies</p>
                        </div>

                        {profile.hobbies.length > 0 ? (
                          <ul className="flex items-center gap-2 flex-wrap">
                            {profile.hobbies.map((hobby) => (
                              <HobbyChecked
                                editable={false}
                                key={hobby.id}
                                checked
                                hobby={hobby}
                              />
                            ))}
                          </ul>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {view === "friends" ? (
                    <SuspenseLoader>
                      <FriendsList username={profile.username} />
                    </SuspenseLoader>
                  ) : (
                    <>
                      <Posts />
                    </>
                  )}
                </>
              )}
            </div>
          ) : (
            <>
              <div className="flex flex-col py-8 gap-y-4 items-center justify-center">
                <p>Login to view user profile</p>
                <LoginBtn />
              </div>
            </>
          )}
        </section>
      </Seo>
    );
  }
};

export default ProfilePage;
