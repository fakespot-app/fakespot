import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import toJS from "utils/toJS/";

import { badgesFetch } from "actions/badges";
import { notificationsFetch } from "actions/notifications";
import { userFetch } from "actions/user";

import Sidebar from "components/Sidebar/";
import Container from "components/Container";

import Challange from "../Challange";
import Splash from "../Splash";
import Answer from "../Answer";


const mapStateToProps = ({ state, badges, user }) => ({
  state: state.get("state"),
  badges: badges.get("data"),
  user: user.get("data"),
  userFetched: user.get("fetched"),
});

class Main extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired,
    badges: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    userFetched: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(userFetch());
    this.props.dispatch(badgesFetch());
    this.props.dispatch(notificationsFetch());
  }

  render() {
    if (!this.props.userFetched) {
      return null;
    }

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

export default connect(mapStateToProps)(toJS(Main));
