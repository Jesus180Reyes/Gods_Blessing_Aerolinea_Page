import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { LoadingPage } from "./shared"

export const App = () => {
  return (
    <>
    <Suspense fallback={<LoadingPage/>}>
    <Outlet/>    
    </Suspense>
    </>
  )
}
