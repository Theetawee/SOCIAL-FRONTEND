import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "../../components/common/Image";
import DefaultAvater from "../../assets/default.webp";
import { FaRegQuestionCircle } from "react-icons/fa";
import {useParams } from "react-router-dom";
import useFetchUser from "../../hooks/Account/useFetchUser";
import Loader from "../../components/common/Loader";
import Seo from "../../components/utils/Seo";
import NotFound from "../../components/common/NotFound";
import VerifiedSvg from "../../components/Partials/Account/VerifiedSvg";
import ProfileActionBtn from "../../components/Partials/Account/ProfileActionBtn";
import Modal from "../../components/common/Modal";
import UpdateProfilePage from "./UpdateProfilePage";
import Hobbies from "../../components/Partials/Account/Hobbies";
import { BsThreeDotsVertical } from "react-icons/bs";


const ProfilePage = () => {


    const { username } = useParams();

    const user_name = username || ""

    const { profile, isLoading, isError,hobbies,isHobbiesError,isHobbiesLoading,update_hobbies,isHobbiesUpdating,isSuccess } = useFetchUser(user_name);


    if (isLoading) {
        return (
            <Loader />
        )
    } else if (isError) {
        return (
            <Seo title="Error!" description="Profile not Found">
                <NotFound type="profile"/>
            </Seo>
        )
    } else if(profile) {


        return (
            <Seo
                title={`${profile.name}(@${profile.username})`}
                description={`Profile Page for @${profile.username}`}
            >

                <Modal title="Edit Profile">
                    <UpdateProfilePage profile={profile}/>
                </Modal>

                <section>
                    <div className="py-4 px-4">
                        <button
                            onClick={() => {
                                window.history.back();
                            }}
                            className="flex items-center"
                        >
                            <IoMdArrowRoundBack className="w-6 h-6 mr-2" />
                            <span>Back</span>
                        </button>
                    </div>
                    <div className="px-2 sm:px-4 pt-4 grid bg-white dark:bg-gray-950 grid-cols-1 gap-3">
                        <div className="items-center flex-wrap justify-between flex">
                            <div className="flex px-4  justify-center items-center">
                                <div className="">
                                    <Image
                                        src={profile.image||DefaultAvater}
                                        alt="User"
                                        hash={profile.profile_image_hash}
                                        className="w-24 h-24 border border-gray-300 dark:bg-gray-800 rounded-full"
                                    />
                                </div>
                                <div className="ml-3 sm:ml-5 py-4">
                                    <h1 className="text-2xl flex items-center font-medium">
                                        {profile?.name}
                                        {profile?.verified && <VerifiedSvg />}
                                    </h1>
                                    <p className="leading-4 italic">
                                        @{profile?.username}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <BsThreeDotsVertical />
                                    </button>
                            </div>
                            <div className="text-center   w-full py-4  ml-8">
                                <ProfileActionBtn profile={profile} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                <button className="border-b-2 border-primary-600">
                                    Profile
                                </button>
                                <button>Posts</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 grid grid-cols-1 gap-5 py-8 dark:bg-gray-900 bg-gray-50 h-full">
                        <div className="mb-6">
                            <div className="flex mb-2 items-center">
                                <FaRegQuestionCircle className="w-6 h-6 text-primary-500" />
                                <p className="ml-2 text-lg font-medium">
                                    About
                                </p>
                            </div>
                            <div>
                                {profile && profile.bio ? (
                                    <p>{profile.bio}</p>
                                ) : (
                                    <p className="italic">No information</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <Hobbies isSuccess={isSuccess} isUpdatingHobbies={isHobbiesUpdating} update_hobbies={update_hobbies} profile_hobbies={profile.hobbies} hobbies={hobbies} isHobbiesLoading={isHobbiesLoading} isHobbiesError={isHobbiesError}/>
                        </div>
                    </div>
                </section>
            </Seo>
        );
    }
};

export default ProfilePage;
