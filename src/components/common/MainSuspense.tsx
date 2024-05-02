import { Suspense } from "react"
import Logo from "./Logo";


const MainSuspense = ({children}: {children: React.ReactNode}) => {
    const fallBack=(
        <div className="fixed flex items-center justify-center top-0 left-0 w-full h-screen z-30 bg-white dark:bg-gray-950">
        <span className="animate-ping"><Logo/></span>
        </div>
    )
  return (
    <Suspense fallback={fallBack} >
      {children}
    </Suspense>
  )
}

export default MainSuspense
