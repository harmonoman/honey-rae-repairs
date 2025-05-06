import "./App.css"
import { CustomersList } from "./components/customers/CustomersList";
import { TicketList } from "./components/tickets/TicketList";

export const App = () => {
  return <>
    <TicketList />
    <CustomersList />
  </>;
}
