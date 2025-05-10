import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css"
import { CustomersList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeeList";
import { TicketList } from "./components/tickets/TicketList";
import { NavBar } from "./components/nav/NavBar";

export const App = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomersList />} />
        <Route path="employees" element={<EmployeeList />} />

      </Route>
    </Routes>
  )
}
