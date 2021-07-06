import React, { Component } from "react"

class AddUser extends Component{
    state = {
        name: "",
        email:""
    }

    updateName = (e) => {
         this.setState({
             name:e.target.value
         })
    }

    updateEmail= (e) => {
         this.setState({
             email: e.target.value
         })    
    }
 

    render() {
        const {newUser}=this.props
        return (
            < div className="card" >
                <div className="card-body">
                    <form onSubmit={e=>e.preventDefault()}>
                        <h5 className="form-header">New Member Form</h5>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="form-control" value={this.state.name}  onChange={this.updateName.bind(this)}></input>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" className="form-control" value={this.state.email} onChange={this.updateEmail.bind(this)}></input>
                        <button type="submit" className="addUserBtn btn btn-success btn-block" onClick={() => {
                            newUser(this.state);
                            this.setState({ name: "", email: "" })}
                        }>Add New User</button>
                    </form>
                </div>
            </div >
    )
    }
}

export default AddUser;