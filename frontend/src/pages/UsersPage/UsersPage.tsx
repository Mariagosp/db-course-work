import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import "./UsersPage.scss";
import type { User, UsersResponse } from "../../types/user";

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/users')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }
        return response.json() as Promise<UsersResponse>
      })
      .then((body) => setUsers(body.data))
      .catch((err: Error) => setError(err.message))
  }, [])
  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <div className="table-wrapper">
        <Table
          headers={["Email", "Name", "Phone", "Role", "Created At", "Updated At"]}
        >
          {users.map(
            ({ id, email, name, phone, role, createdAt, updatedAt }) => (
              <tr key={id} className="products__table--body--tr">
                <td className="products__table--body--tr--td">{email}</td>
                <td className="products__table--body--tr--td">{name}</td>
                <td className="products__table--body--tr--td">{phone}</td>
                <td className="products__table--body--tr--td">{role.charAt(0).toUpperCase() + role.slice(1)}</td>
                <td className="products__table--body--tr--td">
                  {new Date(createdAt).toLocaleString()}
                </td>
                <td className="products__table--body--tr--td">
                  {new Date(updatedAt).toLocaleString()}
                </td>
              </tr>
            )
          )}
        </Table>
      </div>
    </>
  );
};
