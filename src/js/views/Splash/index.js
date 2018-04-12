import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { stateSetState } from "actions/state";

import SplashScreenButton from "components/SplashScreenButton/";

class Splash extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  onClick = () => {
    this.props.dispatch(stateSetState("playing"));
  }

  render() {
    return (
      <div className="flex items-center justify-center h-full">
        <SplashScreenButton onClick={this.onClick} />
      </div>
    );
  }
}

export default connect()(Splash);
