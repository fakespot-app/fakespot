import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import toJS from "utils/toJS";

import { questionsFetch, questionsSubmit } from "actions/questions";

import ChallangeCard from "components/ChallangeCard";
import NewsPaper from "components/Challange/NewsPaper/";
import SourceInput from "components/Challange/SourceInput/";
import SubmitButton from "components/Challange/SubmitButton";
import LifeLinesList from "components/Challange/LifeLinesList/";
import ExceriseHeading from "components/Challange/ExceriseHeading/";
import TrueFalseButtons from "components/Challange/TrueFalseButtons/";

import HNM from "./HintNotificationsManager";

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
      source: "",
      lifeLinesUsed: [],
      optionSelected: null,
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

  onSourceInput = (e) => {
    this.setState({ source: e.target.value });
  }

  onSubmitTrue = () => this.selectButton(true);
  onSubmitFalse = () => this.selectButton(false);

  selectButton = (val) => {
    this.setState({
      optionSelected: val,
    });
  }

  submitAnswer = (e) => {
    e.preventDefault();
    const { optionSelected, source } = this.state;

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
        <NewsPaper>
          <h1>{challange.text}</h1>
        </NewsPaper>

        <ExceriseHeading />

        <form className="pt-0" onSubmit={this.submitAnswer}>
          <TrueFalseButtons
            onSubmitTrue={this.onSubmitTrue}
            onSubmitFalse={this.onSubmitFalse}
            selected={this.state.optionSelected}
          />

          <SourceInput
            onSourceInput={this.onSourceInput}
          />

          <SubmitButton />
        </form>

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
