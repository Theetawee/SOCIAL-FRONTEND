import { SuggestedAccount, UserType } from "../../../hooks/types"
import Image from "../../common/Image";
import DefaultAvater from "../../../assets/default.webp";
import { useNavigate } from "react-router-dom";
import Name from "./Name";

const AccountCard = ({ account, clickable = true }: { account: SuggestedAccount | UserType, clickable?: boolean }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (clickable) {
      navigate(`/${account.username}`)
    }
  }


  return (
    <div onClick={handleClick} className={`flex ${clickable?"cursor-pointer":""} border border-gray-300 dark:border-gray-700 rounded-md p-4 items-center`}>
      <div>
        <Image
          src={account.image || DefaultAvater}
          hash={account.profile_image_hash}
          className="w-14 h-14 rounded-full"
          alt="User"
        />
      </div>
      <div className="ml-4">
        <Name name={account.name} verified={account.verified}/>
              <p>@{account.username}</p>
      </div>
    </div>
  );
}

export default AccountCard