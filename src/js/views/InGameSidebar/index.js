import React from "react";
import { connect } from "react-redux";
import toJS from "utils/toJS/";

import Header from "components/InGameSidebar/Header/";
import Container from "components/InGameSidebar/Container/";
import LevelDescription from "components/InGameSidebar/LevelDescription/";
import RecentAchivements from "components/InGameSidebar/RecentAchivements/";

const mapStateToProps = ({ questions, user }) => ({
  currentLevel: questions.get("currentLevel"),
  levelPoints: questions.get("levelPoints"),
  recentAchivements: user.get("data").get("achivementsCollected").sort((a, b) => (a.collected - b.collected)).slice(0, 3),
  currentLevelMaxPoints: questions.get("currentLevelMaxPoints"),
  currentLevelDescription: questions.get("currentLevelDescription"),
  currentLevelHeader: questions.get("currentLevelHeader"),
  currentLevelImage: questions.get("currentLevelImage"),
});


const InGameSidebar = ({
  currentLevel,
  currentLevelDescription,
  levelPoints,
  currentLevelMaxPoints,
  currentLevelHeader,
  currentLevelImage,
  recentAchivements,
}) => (
  <>
    <Container>
      <Header
        levelPoints={levelPoints}
        currentLevelMaxPoints={currentLevelMaxPoints}
      />

      <LevelDescription
        currentLevel={currentLevel}
        currentLevelImage={currentLevelImage}
        currentLevelHeader={currentLevelHeader}
        currentLevelDescription={currentLevelDescription}
      />

      <RecentAchivements
        recentAchivements={recentAchivements}
      />
    </Container>
  </>
);

export default connect(mapStateToProps)(toJS(InGameSidebar));