import { Suspense } from "react"
import Logo from "./Logo";


const MainSuspense = ({children}: {children: React.ReactNode}) => {
    const fallBack=(
        <div className="flex items-center justify-center h-screen max-w-sm mx-auto z-30 bg-transparent">
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
