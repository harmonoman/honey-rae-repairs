import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService";
import { User } from "../users/User";
import { Link } from "react-router-dom";
import "./Employees.css"

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
                return (
                    <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
                        <User user={employeeObj} />
                    </Link>
                )
            })}
        </div>
    )
}