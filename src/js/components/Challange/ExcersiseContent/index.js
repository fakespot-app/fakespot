import React from "react";

import SourceInput from "components/Challange/SourceInput/";
import SubmitButton from "components/Challange/SubmitButton";
import TrueFalseButtons from "components/Challange/TrueFalseButtons/";


export default class ExceriseContent extends React.Component {
  state = {
    optionSelected: null,
    source: "",
  }

  onSelectButtonClick = val => () => {
    this.setState({
      optionSelected: val,
    });
  }

  onSourceInputChange = (e) => {
    this.setState({
      source: e.target.value,
    });
  }

  submitAnswer = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      optionSelected: this.state.optionSelected,
      source: this.state.source,
    });
  }

  render() {
    return (
      <form className="pt-0" onSubmit={this.submitAnswer}>
        <TrueFalseButtons
          onSubmitTrue={this.onSelectButtonClick(true)}
          onSubmitFalse={this.onSelectButtonClick(false)}
          selected={this.state.optionSelected}
        />

        <SourceInput
          onSourceInput={this.onSourceInputChange}
        />

        <SubmitButton />
      </form>
    );
  }
}