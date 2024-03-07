import { SuggestedAccount, UserType } from "../../../hooks/types"
import Image from "../../common/Image";
import DefaultAvater from "../../../assets/default.webp";

const AccountCard = ({account}:{account:SuggestedAccount|UserType}) => {
  return (
    <div className="flex items-center">
      <div>
        <Image
          src={account.image || DefaultAvater}
          hash={account.profile_image_hash}
          className="w-14 h-14 rounded-full"
          alt="User"
        />
      </div>
      <div className="ml-4">
              <p className="text-xl font-medium">{account.name}</p>
              <p>@{account.username}</p>
      </div>
    </div>
  );
}

export default AccountCard