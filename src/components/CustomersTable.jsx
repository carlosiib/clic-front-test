export default function Customers({ customers }) {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr className="tableRow">
            <th className="" scope="col">Name</th>
            <th className="" scope="col">Email Address</th>
            <th className="" scope="col">Account Status</th>
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
            </tr>
          })}
        </tbody>
      </table>
    </div>

  )
}
