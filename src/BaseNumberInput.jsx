import React from "react";

class BaseNumberInput extends React.Component {
  constructor(props) {
    super(props);

    // bindings
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let newValue = e.target.value;
    // Gère la chaine vide
    newValue = newValue === "" ? "0" : newValue;

    // Gère le cas où on place le curseur au début de l'input et que l'on rentre une donnée non valide
    let newValueInDecimal = parseInt(newValue, this.props.base);
    newValueInDecimal = Number.isNaN(newValueInDecimal)
      ? parseInt(this.props.value, 10)
      : newValueInDecimal;

    // Informe le parent du changement
    this.props.onChange(newValueInDecimal);
  }

  render() {
    const { label, value, base } = this.props;

    // On converti la valeur (en base 10) vers la base choisie
    const valueInBase = parseInt(value, 10).toString(base);

    return (
      <div>
        <label>
          {label}
          <input
            type="text"
            value={valueInBase.toString()}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default BaseNumberInput;
