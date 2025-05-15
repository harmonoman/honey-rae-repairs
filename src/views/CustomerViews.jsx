import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { CustomerNav } from "../components/nav/CustomerNav"

export const CustomerViews = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                        <CustomerNav />
                        <Outlet />
                    </>
                }>
                <Route index element={<Welcome />} />
            </Route>

        </Routes>
    )
}