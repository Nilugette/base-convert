import React from "react";
import "./App.css";

import BaseNumberInput from "./BaseNumberInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    // bindings
    this.handleBaseNumberInputChange = this.handleBaseNumberInputChange.bind(
      this
    );
  }

  handleBaseNumberInputChange(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <BaseNumberInput
          label="Decimal"
          value={value}
          onChange={this.handleBaseNumberInputChange}
          base={10}
        />

        <BaseNumberInput
          label="Binaire"
          value={value}
          onChange={this.handleBaseNumberInputChange}
          base={2}
        />

        <BaseNumberInput
          label="Hexa"
          value={value}
          onChange={this.handleBaseNumberInputChange}
          base={16}
        />
      </div>
    );
  }
}

export default App;