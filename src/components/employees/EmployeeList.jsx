import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService";
import { User } from "../users/User";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getStaffUsers().then(employeeArray => {
            setEmployees(employeeArray);
        })
    }, []);

    return (
        <div className="employees">
            {employees.map((employeeObj) => {
                return (<User user={employeeObj} key={employeeObj.id}/>
                )
            })}
        </div>
    )
}