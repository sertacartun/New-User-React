import React, { Component } from "react"

class UserList extends Component{
    
    render() {
        const { users,deleteUser } = this.props;
        return (
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
  </tbody>
</table>
        )
    }
}

export default UserList;