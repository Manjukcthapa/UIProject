import React from "react";

class LogIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            name="username"
          />

          <label>Password</label>
          <input
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="text"
            name="password"
          />
        </form>
      </div>
    );
  }
}

export default LogIn;
