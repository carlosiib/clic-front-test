import { useState } from "react"
import Modal from "./Modal"

export default function UpdateCustomers({ customers, updatedData }) {
  const [modalContent, setModalContent] = useState()
  const [isOpen, setIsOpen] = useState(false)

  function getSelectedCustomer(id) {
    const customerData = customers.filter(customer => customer.id === id)
    console.log("data", customerData)
    setModalContent(customerData)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>

      <Modal isOpen={isOpen} content={modalContent} closeModal={closeModal} updatedData={updatedData} />

      <table className="table table-bordered">
        <thead>
          <tr className="tableRow">
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Account Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((user) => {
            return <tr className="tableRow" key={user.id}>
              <td>
                {user.first_name}
                <span> </span>
                {user.last_name}
              </td>
              <td>
                {user.email}
              </td>
              {user.state === "enabled" ?
                <td style={{ "color": "green" }}>{user.state.charAt(0).toUpperCase() + user.state.slice(1)}</td>
                :
                <td style={{ "color": "red" }}>{user.state.charAt(0).toUpperCase() + user.state.slice(1)}</td>
              }
              <td>
                <button type="button" className="btn btn-primary" onClick={getSelectedCustomer.bind(null, user.id)}><i className="fas fa-edit"></i></button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>

  )
}
