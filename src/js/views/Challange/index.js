import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import toJS from "utils/toJS";

import { questionsFetch, questionsSubmit } from "actions/questions";

import ChallangeCard from "components/ChallangeCard";
import NewsPaper from "components/Challange/NewsPaper/";
import ExceriseContent from "components/Challange/ExcersiseContent/";
import LifeLinesList from "components/Challange/LifeLinesList/";
import ExceriseHeading from "components/Challange/ExceriseHeading/";

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
    this.state = {
      lifeLinesUsed: [],
      lifelinesUnlocked: 0,
    };

    this.hintNotificationsManager = new HNM(props.notifications, this.unlockLifeLine);
  }

  componentDidMount() {
    this.props.dispatch(questionsFetch());

    this.hintNotificationsManager.startHints();
  }

  componentWillUnmount() {
    this.hintNotificationsManager.clearTimeouts();
  }

  submitAnswer = ({ optionSelected, source }) => {
    if (optionSelected === null || source === "") {
      return;
    }

    const data = {
      isTrue: optionSelected,
      source,
    };

    const { challange } = this.props;

    this.props.dispatch(questionsSubmit(data, challange));
  }

  unlockLifeLine = () => {
    this.setState({
      lifelinesUnlocked: this.state.lifelinesUnlocked + 1,
    });
  }

  useLifeline = n => () => {
    this.setState({
      lifeLinesUsed: [...this.state.lifeLinesUsed, n],
    });
  }

  render() {
    const { challange } = this.props;

    if (this.props.fetched === false) {
      return null;
    }

    return (
      <ChallangeCard>
        <NewsPaper titleText={challange.text} />

        <ExceriseHeading />

        <ExceriseContent onSubmit={this.submitAnswer} />

        <LifeLinesList
          lifeLines={challange.lifeLines}
          used={this.state.lifeLinesUsed}
          onClick={this.useLifeline}
          unlocked={this.state.lifelinesUnlocked}
        />
      </ChallangeCard>
    );
  }
}

export default connect(mapStateToProps)(toJS(Challange));
