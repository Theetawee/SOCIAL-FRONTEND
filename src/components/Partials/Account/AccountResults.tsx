import { SuggestedAccount } from "../../../hooks/types"
import AccountCard from "./AccountCard"
const AccountResults = ({ data }: { data: SuggestedAccount[] }) => {
  return (
      <div className="grid grid-cols-1 max-w-2xl mx-auto gap-3">
          {data.length>0 ?(<>{data.map((account) => (
              <div key={account.id} className="dark:bg-gray-950 bg-gray-50 p-4 rounded-xl">
                <AccountCard account={account}/>  
              </div>
          ))}</>) : (<>
          
          <p className="text-center text-lg py-4">No Accounts found.</p>
          
          </>)}
          
    </div>
  )
}

export default AccountResults