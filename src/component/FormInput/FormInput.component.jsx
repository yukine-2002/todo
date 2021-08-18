import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  handle = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({
      id: Math.floor(Math.random() * 10000),
      value: this.state.input,
    });

    this.setState({
      input: "",
    });
  };

  render() {
    return this.props.edit ? (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="todo"
          value={this.state.input}
          onChange={this.handle}
        />
        <input type="submit" value="sua" onClick={this.handleSubmit} />
      </form>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="todo"
          value={this.state.input}
          onChange={this.handle}
        />
        <input type="submit" value="them" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default FormInput;
