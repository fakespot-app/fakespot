import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import toJS from "utils/toJS";

import { stateSetState } from "actions/state";

// import ChallangeCard from "components/ChallangeCard";
// import ChallangeCardFrame from "components/ChallangeCardFrame";

// import Charts from "components/Answer/Charts/";
// import Header from "components/Answer/Header/";
// import BestSource from "components/Answer/BestSource/";
// import PlayAgainButton from "components/Answer/PlayAgainButton/";
// import QuestionComment from "components/Answer/QuestionComment/";

import Button from "components/Button";

const mapStateToProps = ({ questions }) => ({
  challange: questions.get("data").last(),
});

class Answer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    challange: PropTypes.object.isRequired,
  }

  playAgain = () => {
    this.props.dispatch(stateSetState("playing"));
  }

  render() {
    const { challange } = this.props;

    const wasAnsweredCorrectly = challange.isTrue === challange.userAnswer.isTrue;

    return (
      <main style={{
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      }}
      >
        { wasAnsweredCorrectly ? "Dobrze! 😄" : "Źle! 😞" }
        <Button
          onClick={this.playAgain}
          raised
          style={{ fontSize: "3em" }}
        >Zagraj ponownie
        </Button>
      </main>

      // <ChallangeCard>
      //   <main className="flex flex-col">
      //     <Header
      //       isTrue={challange.isTrue}
      //       challangeText={challange.text}
      //       answerCorrect={wasAnsweredCorrectly}
      //     />

      //     <ChallangeCardFrame>
      //       <QuestionComment
      //         comment={challange.questionComment}
      //       />

      //       <Charts
      //         globalAnswers={challange.globalAnswers}
      //       />

      //       <QuestionComment
      //         title="Gdzie dobrze sprawdzać taką informację?"
      //         comment={challange.bestSourceComment}
      //       />

      //       <BestSource
      //         bestSource={challange.bestSource}
      //       />
      //     </ChallangeCardFrame>

      //     <PlayAgainButton onClick={this.playAgain} />
      //   </main>
      // </ChallangeCard>
    );
  }
}

export default connect(mapStateToProps)(toJS(Answer));
