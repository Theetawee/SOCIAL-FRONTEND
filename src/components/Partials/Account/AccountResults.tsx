import { SuggestedAccount } from "../../../hooks/types"
import AccountCard from "./AccountCard"
const AccountResults = ({ data }: { data: SuggestedAccount[] }) => {
    console.log(data)
  return (
      <div className="grid grid-cols-1 max-w-2xl mx-auto gap-3">
          {data.map((account) => (
              <div key={account.id} className="dark:bg-gray-900 bg-gray-50 p-4 rounded-xl">
                <AccountCard account={account}/>  
              </div>
          ))}
    </div>
  )
}

export default AccountResults