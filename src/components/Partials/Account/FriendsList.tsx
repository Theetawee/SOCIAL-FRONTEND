import { useInfiniteQuery } from "@tanstack/react-query";
import Endpoints from "../../../hooks/Account/Endpoints";
import Loader from "../../common/Loader";
import CommonError from "../../common/CommonError";
import { IoMdRefresh } from "react-icons/io";
import SuspenseLoader from "../../utils/SuspenseLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import AccountCard from "./AccountCard";

const FriendsList = ({username}:{username:string}) => {
  const { getFriends } = Endpoints();

  const { data, fetchNextPage, hasNextPage, isPending, isError } =
    useInfiniteQuery({
      queryKey: ["friends",username],
      networkMode: "offlineFirst",
      queryFn: (pageNum) => getFriends(pageNum.pageParam || 1,username),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const accounts = data?.pages.flatMap((page) => page.results);

  if (isPending) {
    return (
      <Loader/>
    );
  } else if (isError) {
    return (
        <CommonError />
      
    );
  } else {
    return (
      <SuspenseLoader>
          <InfiniteScroll
            dataLength={accounts?.length || 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Loader/>}
            scrollThreshold={0.8}
            endMessage={
              <div className="text-center p-4">
                <h5>No more friends.</h5>
              </div>
            }
            pullDownToRefresh={false}
            refreshFunction={() => getFriends(1,username)}
            pullDownToRefreshContent={
              <div className="flex items-center justify-center  gap-1">
                <IoMdRefresh className="w-5 h-5 animate-spin" />
              </div>
            }
            releaseToRefreshContent={
              <div className="flex items-center justify-center gap-1">
                <IoMdRefresh className="w-5 h-5 animate-spin" />
              </div>
            }>
            <div>
              <ul>
                {accounts?.map((account) => (
                  <div key={account.id}>
                    <AccountCard account={account}/>
                  </div>
                ))}
              </ul>
            </div>
          </InfiniteScroll>
      </SuspenseLoader>
    );
  }
};


export default FriendsList