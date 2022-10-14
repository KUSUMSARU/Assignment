import React from "react";
import { Label, RadioButton } from "rc-easyui";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fruit: null,
      fruits: ["Apple", "Orange", "Banana"],
    };
  }
  handleChange(value, checked) {
    if (checked) {
      this.setState({ fruit: value });
    }
  }
  render() {
    return (
      <div>
        <h2>Basic RadioButton</h2>
        <div>
          {this.state.fruits.map((fruit) => {
            return (
              <div key={fruit}>
                <RadioButton
                  inputId={fruit}
                  value={fruit}
                  groupValue={this.state.fruit}
                  onChange={(checked) => this.handleChange(fruit, checked)}
                />
                <Label htmlFor={fruit} style={{ margin: "0 5px" }}>
                  {fruit}
                </Label>
              </div>
            );
          })}
          {this.state.fruit !== null && <p>You selected: {this.state.fruit}</p>}
        </div>
      </div>
    );
  }
}

export default App;
