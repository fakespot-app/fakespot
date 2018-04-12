import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Sidebar from "components/Sidebar/";
import Container from "components/Container";

import Challange from "../Challange";
import Splash from "../Splash";
import Answer from "../Answer";


const mapStateToProps = ({ state, badges, user }) => ({
  state: state.state,
  badges: badges.data,
  user: user.data,
});

class Main extends React.Component {
  static propTypes = {
    state: PropTypes.string.isRequired,
    badges: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
  }

  render() {
    const { state } = this.props;

    let mainComponent = null;

    switch (state) {
      case "splash": {
        mainComponent = <Splash />;
        break;
      }
      case "playing": {
        mainComponent = <Challange />;
        break;
      }
      case "answer": {
        mainComponent = <Answer />;
        break;
      }

      // no default
    }

    return (
      <Container
        main={mainComponent}
      >
        <Sidebar
          badges={this.props.badges}
          user={this.props.user}
        />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Main);
