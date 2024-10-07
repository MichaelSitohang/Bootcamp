import React from "react";

class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }); // dia itu akan ngapain setelah -- dia akan mengganti isi si value
  }

  handleSubmit(event) {
    alert(" A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name :
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default InputData;
