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
  recentAchivements: user
    .get("data")
    .get("achivementsCollected"),
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
}) => {
  const recentAchivementsSorted = recentAchivements.sort((a, b) => b.collected - a.collected).slice(0, 3);

  return (
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
        recentAchivements={recentAchivementsSorted}
      />
    </Container>
  </>
  );
};

export default connect(mapStateToProps)(toJS(InGameSidebar));