import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import HNM from "./HintNotificationsManager";

import ChallangeCard from "../../components/ChallangeCard";

import NewsPaper from "../../components/Challange/NewsPaper/";
import SourceInput from "../../components/Challange/SourceInput/";
import SubmitButton from "../../components/Challange/SubmitButton";
import LifeLinesList from "../../components/Challange/LifeLinesList/";
import ExceriseHeading from "../../components/Challange/ExceriseHeading/";
import TrueFalseButtons from "../../components/Challange/TrueFalseButtons/";

const mapStateToProps = ({ questions, notifications }) => ({
  challange: questions.data[questions.data.length - 1],
  fetched: questions.fetched,
  notifications: notifications.data,
});

@connect(mapStateToProps)
export default class Challange extends React.Component {
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
    this.props.dispatch({ type: "QUESTION/FETCH_REQUESTED" });

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

    if (this.state.optionSelected === null || this.state.source === "") {
      return;
    }

    this.props.dispatch({
      type: "QUESTION/SUBMIT",
      payload: {
        data: {
          isTrue: this.state.optionSelected,
          source: this.state.source,
        },
        challange: this.props.challange,
      },
    });
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
