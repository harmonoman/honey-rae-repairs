import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getEmployeeDetails } from "../../services/employeeService";
import { getStaffUsers } from "../../services/userService";

export const EmployeeDetails = () => {
    const { employeeId } = useParams();
    const [employeeInfo, setEmployeeInfo] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(()=> {
        getStaffUsers().then((staffArray) => {
            const foundUser = staffArray.find(user => user.id === parseInt(employeeId));
            setUserInfo(foundUser);
        }) 

        getEmployeeDetails(employeeId).then((employeeArray) => {
            if (employeeArray.length > 0) {
                setEmployeeInfo(employeeArray[0]);
            }
        })
    },[employeeId])

    return (
        <div  >
            <div>Employee name: {userInfo?.fullName}</div>
            <div>Specialty: {employeeInfo?.specialty || "N/A"}</div>
            <div>Rate: {employeeInfo?.rate ? `$${employeeInfo.rate}/hr` : "N/A"}</div>
            <div>Number of Tickets: {employeeInfo?.employeeTickets.length || 0}</div>
        </div>
    )
}