import { useInfiniteQuery } from "@tanstack/react-query";
import Endpoints from "../hooks/Main/Endpoints";
import useTopbar from "../hooks/useTopbar";
import Loader from "../components/common/Loader";
import CommonError from "../components/common/CommonError";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoMdRefresh } from "react-icons/io";
import LikeNotification from "../components/Partials/Home/LikeNotification";

const NotificationsPage = () => {
  useTopbar("Notifications", true);

  const { getNotifications } = Endpoints();

  const { data, fetchNextPage, hasNextPage, isPending, isError } =
    useInfiniteQuery({
      queryKey: ["notifications"],
      networkMode: "offlineFirst",
      queryFn: (pageNum) => getNotifications(pageNum.pageParam || 1),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const notifications = data?.pages.flatMap((page) => page.results);

  if (isPending) {
    return <Loader />;
  } else if (isError) {
    return <CommonError />;
  } else {
    return (
      <section className="py-8 px-4">
        <div>
          <h1 className="text-3xl mb-4">Notifications</h1>
        </div>
        <SuspenseLoader>
          <InfiniteScroll
            dataLength={notifications?.length || 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Loader />}
            scrollThreshold={0.8}
            endMessage={
              <div className="text-center p-4">
                <h5>No more notifications.</h5>
              </div>
            }
            pullDownToRefresh={false}
            refreshFunction={() => getNotifications()}
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
              <ul className=" grid grid-cols-1 gap-4 px-2 py-4">
                {notifications?.map((notification) => (
                  <div key={notification.id}>
                    {notification.notification_type === "like" ? (
                      <>
                        <LikeNotification notification={notification} />
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </InfiniteScroll>
        </SuspenseLoader>
      </section>
    );
  }
};

export default NotificationsPage;
