import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { stateSetState } from "actions/state";

import Button from "components/Button";

class Splash extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  onClick = () => {
    this.props.dispatch(stateSetState("playing"));
  }

  render() {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button
          onClick={this.onClick}
          raised
          style={{ fontSize: "3em" }}
        >Zaczynamy!
        </Button>
      </div>
    );
  }
}

export default connect()(Splash);
