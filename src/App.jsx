import "./App.css"
import { CustomersList } from "./components/customers/CustomersList";
import { EmployeeList } from "./components/employees/EmployeeList";
import { TicketList } from "./components/tickets/TicketList";

export const App = () => {
  return <>
    <TicketList />
    <CustomersList />
    <EmployeeList />
  </>;
}
