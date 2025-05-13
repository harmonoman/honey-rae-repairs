import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService";
import { getStaffUsers } from "../../services/userService.jsx";

export const EmployeeDetails = () => {
    const { employeeId } = useParams();
    const [employeeInfo, setEmployeeInfo] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(()=> {
        getStaffUsers().then((staffArray) => {
            const foundUser = staffArray.find(user => user.id === parseInt(employeeId));
            setUserInfo(foundUser);
        }) 

        getEmployeeByUserId(employeeId).then((employeeArray) => {
            if (employeeArray.length > 0) {
                setEmployeeInfo(employeeArray[0]);
            }
        })
    },[employeeId])

    return (
        <section className="employee">
            <header className="employee-header">{userInfo?.fullName}</header>
            <div className="employee-row">
                <div className="employee-info">Specialty:</div>
                <div>{employeeInfo?.specialty || "N/A"}</div>
            </div>

            <div className="employee-row">
                <div className="employee-info">Rate:</div>
                <div>{employeeInfo?.rate ? `$${employeeInfo.rate}/hr` : "N/A"}</div>
            </div>
            
            <div><em>Currently working on {employeeInfo?.employeeTickets.length || 0} tickets</em></div>
        </section>
    )
}