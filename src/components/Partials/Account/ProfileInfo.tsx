import { UserType } from "../../../hooks/types";
import { FaLocationDot } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { format } from "date-fns";


const ProfileInfo = ({profile}:{profile:UserType}) => {
  return (
    <div>
      <div className="text-center">
        {profile && profile.bio ? (
          <p>{profile.bio}</p>
        ) : (
          <p className="italic">No information</p>
        )}
      </div>
      <div className="py-4 flex items-center  flex-wrap gap-x-4 gap-y-4">
        {profile && profile.location && (
          <div className="flex items-center gap-x-2">
            <FaLocationDot className="w-5 h-5 text-gray-500" />
            <p>{profile.location}</p>
          </div>
        )}

        {profile && profile.gender && (
          <div className="flex items-center gap-x-2">
            <p className="capitalize">
              Gender: {profile.gender}{" "}
              {profile.gender === "male"
                ? "(he/him/his)"
                : profile.gender === "female"
                ? "(she/her/hers)"
                : "(rather not say)"}
            </p>
          </div>
        )}

        {profile.date_of_birth && (
          <div className="flex items-center gap-x-2">
            <p className="flex items-center gap-x-2">
              <LiaBirthdayCakeSolid className="w-5 h-5 text-gray-500" />
              {profile.is_self ? (
                <>{format(new Date(profile.date_of_birth), "dd MMMM, yyyy.")}</>
              ) : (
                <>{format(new Date(profile.date_of_birth), "dd MMMM")}</>
              )}
            </p>
          </div>
              )}
              

      </div>
    </div>
  );
}

export default ProfileInfo