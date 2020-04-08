import React from "react";
import InputComponent from "./InputComponent";
import Button from "./Button";

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    age: ""
  };
  onFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    });
  };
  onLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    });
  };
  onDobChange = e => {
    this.setState({
      dateOfBirth: e.target.value
    });
  };
  onAgeChange = e => {
    this.setState({
      age: e.target.value
    });
  };
  onSubmit = () => {
    this.setState({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      age: ""
    });
  };
  render() {
    return (
      <div>
        <h1> A simple React Login Form </h1>
        <InputComponent
          title="Please enter the FirstName"
          content={this.state.firstName}
          onInputChange={this.onFirstNameChange}
        />
        <br />
        <InputComponent
          title="Please enter the Lastname"
          content={this.state.lastName}
          onInputChange={this.onLastNameChange}
        />
        <br />
        <InputComponent
          title="Please enter the Date Of Birth"
          content={this.state.dateOfBirth}
          onInputChange={this.onDobChange}
        />
        <br />
        <InputComponent
          title="Please enter age"
          content={this.state.age}
          onInputChange={this.onAgeChange}
        />
        <br />
        <Button value="submit" onClick={this.onSubmit} />
      </div>
    );
  }
}
export default App;
