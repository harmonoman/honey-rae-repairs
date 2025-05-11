import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const { customerId } = useParams();

    return (
        <div>Customer #{customerId}</div>
    )
}