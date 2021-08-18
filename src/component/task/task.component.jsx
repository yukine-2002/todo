import React from "react";
import FormInput from "../FormInput/FormInput.component";
import './task.style.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      value: "",
    };
  }
  update = ({ value }) => {
    this.props.update(this.state.id, value);
    this.setState({
      id: null,
    });
  };
  handle = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    console.log(this.state);
   

    return (
      <div>
        {this.props.value.map((tvalue, index) => (
          <div key={index} className="listtodo">
            <div key={tvalue.id} className="title">
              <h4>{this.state.id === tvalue.id ?<FormInput addTodo={this.update} edit={this.state} /> : tvalue.value}</h4>
            </div>
            <div className="control">
              <button
                onClick={() =>
                  this.setState({
                    id: tvalue.id,
                    edit: !this.state.edit,
                  })
                }
              >
                sua
              </button>
              <button onClick={() => this.props.remove(tvalue.id)}> xoa</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Task;
