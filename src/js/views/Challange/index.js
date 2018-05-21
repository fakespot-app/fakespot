import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import toJS from "utils/toJS";

import { questionsFetch, questionsSubmit } from "actions/questions";

// import ChallangeCard from "components/ChallangeCard";
// import NewsPaper from "components/Challange/NewsPaper/";
// import ExceriseContent from "components/Challange/ExcersiseContent/";
// import LifeLinesList from "components/Challange/LifeLinesList/";
// import ExceriseHeading from "components/Challange/ExceriseHeading/";

import Header from "components/Challange/Header";
import Container from "components/Challange/Container";
import SourceSection from "components/Challange/SourceSection";
import ChoiceButtons from "components/Challange/ChoiceButtons";

import HNM from "utils/HintNotificationsManager";

const mapStateToProps = ({ questions, notifications }) => ({
  challange: questions.get("data").last(),
  fetched: questions.get("fetched"),
  notifications: notifications.get("data"),
});

class Challange extends React.Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    challange: PropTypes.object,
    fetched: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    challange: {},
  }

  constructor(props) {
    super();
    this.hintNotificationsManager = new HNM(props.notifications, this.unlockLifeLine);
  }

  state = {
    sourceSubmitted: "",
    isSourceValid: false,
    choiceSubmitted: null,
  }

  componentDidMount() {
    this.props.dispatch(questionsFetch());

    this.hintNotificationsManager.startHints();
  }

  componentWillUnmount() {
    this.hintNotificationsManager.clearTimeouts();
  }

  onSourceChange = (e) => {
    const ulrRegex = /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    let isSourceValid = false;

    if (ulrRegex.test(e.target.value)) {
      isSourceValid = true;
    }

    this.setState({
      sourceSubmitted: e.target.value,
      isSourceValid,
    });
  }

  onSubmit = () => {
    console.log(this.state.sourceSubmitted, this.state.choiceSubmitted);
  }

  render() {
    const { challange } = this.props;

    return (
      <Container>
        <Header quote={challange.text} />

        <SourceSection onSourceChange={this.onSourceChange} />

        <ChoiceButtons isSourceValid={this.state.isSourceValid} />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(toJS(Challange));
