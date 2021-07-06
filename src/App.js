import React, { Component } from "react"
import AddUser from "./components/AddUser";
import UserList from "./components/UserList"
import "../src/App.css"
class App extends React.Component{
    state = {
      users: [
        {
          id: 1,
          name: "Alex",
          email: "example1@hotmail.com"
        }, {
          id: 2,
          name: "Jessica",
          email: "example2@hotmail.com"
        }, {
          id: 3,
          name: "Joseph",
          email: "example3@hotmail.com"
        }
      ]
    }
  
  deleteUser = (id) => {
    let filteredUsers = this.state.users.filter(e => e.id !== id)
    this.setState({
      users:filteredUsers
    })
  }

  newUser = (inf) => {
    if (inf.email != "" && inf.name != ""){
    this.setState({
      users: [...this.state.users,
        {
                id: this.state.users.length == 0 ? 0 : this.state.users[this.state.users.length - 1].id + 1,
                name: inf.name,
                email: inf.email
        }]
      })
    } else {
      window.alert("Please Fill All Inputs")
    }
    }
  
render(){  
  return (
    <div className="container">
      <h5>{this.state.title}</h5>
      {/* {this.state.auth ? <p>Doğrulandı</p> : <p>Doğrulanmadı</p>} */}
      <AddUser newUser={this.newUser}></AddUser>
      <UserList users={this.state.users} deleteUser={this.deleteUser}></UserList>
    </div>
  );
}}

export default App;
