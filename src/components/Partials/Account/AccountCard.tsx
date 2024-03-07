import { SuggestedAccount, UserType } from "../../../hooks/types"
import Image from "../../common/Image";
import DefaultAvater from "../../../assets/default.webp";
import VerifiedSvg from "./VerifiedSvg";
import { useNavigate } from "react-router-dom";

const AccountCard = ({ account, clickable = true }: { account: SuggestedAccount | UserType, clickable?: boolean }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (clickable) {
      navigate(`/${account.username}`)
    }
  }


  return (
    <div onClick={handleClick} className={`flex ${clickable?"cursor-pointer":""} items-center`}>
      <div>
        <Image
          src={account.image || DefaultAvater}
          hash={account.profile_image_hash}
          className="w-14 h-14 rounded-full"
          alt="User"
        />
      </div>
      <div className="ml-4">
        <div className="flex items-center">
          <p className="text-xl font-medium">{account.name}</p>
          {account.verified && (<VerifiedSvg/>)}
          </div>
              <p>@{account.username}</p>
      </div>
    </div>
  );
}

export default AccountCard