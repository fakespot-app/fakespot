import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setState } from "../../actions/questions/";

import ChallangeCard from "../../components/ChallangeCard";
import ChallangeCardFrame from "../../components/ChallangeCardFrame";

import Charts from "../../components/Answer/Charts/";
import Header from "../../components/Answer/Header/";
import BestSource from "../../components/Answer/BestSource/";
import PlayAgainButton from "../../components/Answer/PlayAgainButton/";
import QuestionComment from "../../components/Answer/QuestionComment/";

const mapStateToProps = ({ questions }) => ({
  challange: questions.data[questions.data.length - 1],
});

@connect(mapStateToProps)
export default class Answer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    challange: PropTypes.object.isRequired,
  }

  playAgain = () => {
    this.props.dispatch(setState("playing"));
  }

  render() {
    const { challange } = this.props;

    const wasAnsweredCorrectly = challange.isTrue === challange.userAnswer.isTrue;

    return (
      <ChallangeCard>
        <main className="flex flex-col">
          <Header
            isTrue={challange.isTrue}
            challangeText={challange.text}
            answerCorrect={wasAnsweredCorrectly}
          />

          <ChallangeCardFrame>
            <QuestionComment
              comment={challange.questionComment}
            />

            <Charts
              globalAnswers={challange.globalAnswers}
            />

            <QuestionComment
              title="Gdzie dobrze sprawdzać taką informację?"
              comment={challange.bestSourceComment}
            />

            <BestSource
              bestSource={challange.bestSource}
            />
          </ChallangeCardFrame>

          <PlayAgainButton onClick={this.playAgain} />
        </main>
      </ChallangeCard>
    );
  }
}
